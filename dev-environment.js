#!/usr/bin/env node

/**
 * FrameX Development Environment Setup
 * Complete tools for website editing and live preview
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// Configuration
const CONFIG = {
    port: 8080,
    watchDir: __dirname,
    autoReload: true,
    autoCommit: true,
    autoPR: false
};

// File watcher for hot reload
class FileWatcher {
    constructor() {
        this.watchers = new Map();
        this.clients = new Set();
    }

    watch(dir) {
        console.log(`👁️  Watching directory: ${dir}`);
        
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
            if (filename && !filename.includes('node_modules') && !filename.includes('.git')) {
                console.log(`📝 File changed: ${filename}`);
                this.notifyClients(filename);
                
                if (CONFIG.autoCommit) {
                    this.autoCommit(filename);
                }
            }
        });
    }

    notifyClients(filename) {
        const message = JSON.stringify({
            type: 'reload',
            file: filename,
            timestamp: Date.now()
        });

        this.clients.forEach(client => {
            client.write(`data: ${message}\n\n`);
        });
    }

    async autoCommit(filename) {
        try {
            await execAsync('git add -A');
            await execAsync(`git commit -m "auto: Update ${filename}"`);
            console.log(`✅ Auto-committed changes to ${filename}`);
        } catch (error) {
            // Ignore if no changes to commit
        }
    }

    addClient(res) {
        this.clients.add(res);
        res.on('close', () => {
            this.clients.delete(res);
        });
    }
}

// Development server with hot reload
class DevServer {
    constructor(port = 8080) {
        this.port = port;
        this.watcher = new FileWatcher();
        this.mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon'
        };
    }

    start() {
        const server = http.createServer((req, res) => {
            // Handle Server-Sent Events for hot reload
            if (req.url === '/dev-events') {
                res.writeHead(200, {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                    'Access-Control-Allow-Origin': '*'
                });
                this.watcher.addClient(res);
                return;
            }

            // Serve static files
            let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
            const extname = path.extname(filePath);
            const contentType = this.mimeTypes[extname] || 'text/plain';

            fs.readFile(filePath, (error, content) => {
                if (error) {
                    if (error.code === 'ENOENT') {
                        res.writeHead(404);
                        res.end('404 Not Found');
                    } else {
                        res.writeHead(500);
                        res.end('Server Error');
                    }
                } else {
                    // Inject hot reload script for HTML files
                    if (extname === '.html' && CONFIG.autoReload) {
                        content = this.injectHotReload(content.toString());
                    }
                    
                    res.writeHead(200, { 
                        'Content-Type': contentType,
                        'Access-Control-Allow-Origin': '*'
                    });
                    res.end(content);
                }
            });
        });

        server.listen(this.port, () => {
            console.log(`\n🚀 Development server running at http://localhost:${this.port}`);
            console.log('📝 Hot reload enabled - Changes will auto-refresh');
            console.log('💾 Auto-commit enabled - Changes will be saved to Git\n');
        });

        // Start watching files
        this.watcher.watch(__dirname);
    }

    injectHotReload(html) {
        const hotReloadScript = `
<script>
(function() {
    const evtSource = new EventSource('/dev-events');
    evtSource.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log('🔄 Reloading due to change in:', data.file);
        setTimeout(() => location.reload(), 100);
    };
    evtSource.onerror = function(e) {
        console.error('Dev server connection lost');
        setTimeout(() => location.reload(), 5000);
    };
    console.log('🔥 Hot reload connected');
})();
</script>
        `;
        
        // Inject before closing body tag
        return html.replace('</body>', `${hotReloadScript}\n</body>`);
    }
}

// Editor helper functions
class EditorTools {
    static async createBackup() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupDir = path.join(__dirname, 'backups', timestamp);
        
        await execAsync(`mkdir -p ${backupDir}`);
        await execAsync(`cp -r *.html *.css *.js ${backupDir}/ 2>/dev/null || true`);
        
        console.log(`💾 Backup created: ${backupDir}`);
        return backupDir;
    }

    static async validateHTML() {
        console.log('🔍 Validating HTML files...');
        const htmlFiles = fs.readdirSync(__dirname)
            .filter(f => f.endsWith('.html'));
        
        for (const file of htmlFiles) {
            const content = fs.readFileSync(file, 'utf8');
            const issues = [];
            
            // Check for basic issues
            if (!content.includes('<!DOCTYPE')) {
                issues.push('Missing DOCTYPE declaration');
            }
            if (!content.includes('<html')) {
                issues.push('Missing html tag');
            }
            if (!content.includes('lang=')) {
                issues.push('Missing language attribute');
            }
            if (!content.includes('<title>')) {
                issues.push('Missing title tag');
            }
            
            if (issues.length > 0) {
                console.log(`⚠️  ${file}: ${issues.join(', ')}`);
            } else {
                console.log(`✅ ${file}: Valid`);
            }
        }
    }

    static async formatCode() {
        console.log('🎨 Formatting code...');
        
        // Format HTML files
        const htmlFiles = fs.readdirSync(__dirname)
            .filter(f => f.endsWith('.html'));
        
        for (const file of htmlFiles) {
            let content = fs.readFileSync(file, 'utf8');
            
            // Basic formatting
            content = content
                .replace(/\s+</g, '\n<')  // New line before tags
                .replace(/>\s+/g, '>\n')  // New line after tags
                .replace(/\n\n+/g, '\n');  // Remove multiple blank lines
            
            fs.writeFileSync(file, content);
            console.log(`✨ Formatted: ${file}`);
        }
    }

    static async createPR() {
        try {
            const { stdout: branch } = await execAsync('git branch --show-current');
            const { stdout: status } = await execAsync('git status --porcelain');
            
            if (status.trim()) {
                console.log('📝 Uncommitted changes detected. Committing...');
                await execAsync('git add -A');
                await execAsync('git commit -m "feat: Development updates"');
            }
            
            console.log('🚀 Pushing to GitHub...');
            await execAsync(`git push origin ${branch.trim()}`);
            
            console.log(`\n✅ Changes pushed to branch: ${branch.trim()}`);
            console.log(`📎 Create PR at: https://github.com/abmuponly-official/framex-website/compare/${branch.trim()}`);
        } catch (error) {
            console.error('❌ Error creating PR:', error.message);
        }
    }
}

// Quick edit commands
class QuickEdit {
    static async updateText(file, oldText, newText) {
        const content = fs.readFileSync(file, 'utf8');
        const updated = content.replace(oldText, newText);
        fs.writeFileSync(file, updated);
        console.log(`✏️  Updated text in ${file}`);
    }

    static async updateCSS(selector, property, value) {
        const cssFiles = fs.readdirSync(path.join(__dirname, 'css'))
            .filter(f => f.endsWith('.css'));
        
        for (const file of cssFiles) {
            const filePath = path.join(__dirname, 'css', file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            const regex = new RegExp(`(${selector}\\s*{[^}]*${property}:\\s*)([^;]+)`, 'g');
            if (regex.test(content)) {
                content = content.replace(regex, `$1${value}`);
                fs.writeFileSync(filePath, content);
                console.log(`🎨 Updated CSS in ${file}: ${selector} { ${property}: ${value} }`);
            }
        }
    }

    static async addComponent(targetFile, position, component) {
        const content = fs.readFileSync(targetFile, 'utf8');
        const updated = content.replace(position, `${position}\n${component}`);
        fs.writeFileSync(targetFile, updated);
        console.log(`🔧 Added component to ${targetFile}`);
    }
}

// CLI Interface
class DevCLI {
    static showHelp() {
        console.log(`
╔════════════════════════════════════════════════════╗
║       FrameX Development Environment v2.0         ║
╚════════════════════════════════════════════════════╝

📝 Commands:
  start          - Start development server with hot reload
  backup         - Create backup of current files
  validate       - Validate HTML files
  format         - Format code files
  pr             - Create/update pull request
  help           - Show this help menu

🔧 Quick Edit Functions:
  - Auto hot reload on file changes
  - Auto commit to Git
  - Live preview at http://localhost:8080

💡 Usage Examples:
  node dev-environment.js start
  node dev-environment.js backup
  node dev-environment.js pr
        `);
    }

    static async run(command) {
        switch (command) {
            case 'start':
                const server = new DevServer(CONFIG.port);
                server.start();
                break;
            
            case 'backup':
                await EditorTools.createBackup();
                break;
            
            case 'validate':
                await EditorTools.validateHTML();
                break;
            
            case 'format':
                await EditorTools.formatCode();
                break;
            
            case 'pr':
                await EditorTools.createPR();
                break;
            
            case 'help':
            default:
                this.showHelp();
                break;
        }
    }
}

// Export for module use
module.exports = {
    DevServer,
    EditorTools,
    QuickEdit,
    FileWatcher
};

// Run if called directly
if (require.main === module) {
    const command = process.argv[2] || 'help';
    DevCLI.run(command);
}