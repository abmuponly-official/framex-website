#!/bin/bash

# FrameX Development Tools Script
# Provides utilities for development, testing, and deployment

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }

# Show menu
show_menu() {
    echo -e "\n${BLUE}================================${NC}"
    echo -e "${GREEN}🚀 FrameX Development Tools${NC}"
    echo -e "${BLUE}================================${NC}\n"
    echo "1) 🔨 Build & Optimize (Minify CSS/JS)"
    echo "2) 🌐 Start Development Server"
    echo "3) 🧪 Run Performance Tests"
    echo "4) 📦 Apply Optimizations to HTML"
    echo "5) 🔄 Sync with GitHub"
    echo "6) 📝 Create Git Commit"
    echo "7) 🚀 Deploy to Production"
    echo "8) 🔍 Check File Sizes"
    echo "9) 📊 Generate Performance Report"
    echo "10) 🛠️ Install Dependencies"
    echo "11) 🧹 Clean Build Files"
    echo "12) 📱 Test Mobile View"
    echo "0) 🚪 Exit"
    echo -e "\n${BLUE}================================${NC}"
}

# Build and optimize
build_optimize() {
    print_info "Starting build optimization..."
    node build-optimize.js
    print_success "Build optimization complete!"
}

# Start development server
start_server() {
    print_info "Starting development server on port 8000..."
    python3 -m http.server 8000
}

# Run performance tests
run_tests() {
    print_info "Running performance tests..."
    
    # Check if lighthouse is installed
    if ! command -v lighthouse &> /dev/null; then
        print_warning "Lighthouse not installed. Installing..."
        npm install -g lighthouse
    fi
    
    # Run lighthouse test
    lighthouse http://localhost:8000 --output=html --output-path=./performance-report.html --view
    print_success "Performance report generated: performance-report.html"
}

# Apply optimizations to HTML files
apply_optimizations() {
    print_info "Applying optimizations to HTML files..."
    
    # Backup original files
    mkdir -p backup
    cp *.html backup/
    
    # Replace original with optimized
    for file in *.optimized.html; do
        if [ -f "$file" ]; then
            original="${file%.optimized.html}.html"
            cp "$file" "$original"
            print_success "Applied: $original"
        fi
    done
    
    print_success "All optimizations applied! Original files backed up in ./backup/"
}

# Sync with GitHub
sync_github() {
    print_info "Syncing with GitHub..."
    git fetch origin
    git pull origin genspark_ai_developer
    print_success "Synced with GitHub!"
}

# Create git commit
create_commit() {
    print_info "Creating git commit..."
    git add -A
    read -p "Enter commit message: " commit_msg
    git commit -m "$commit_msg"
    git push origin genspark_ai_developer
    print_success "Changes committed and pushed!"
}

# Deploy to production
deploy_production() {
    print_warning "Deploying to production..."
    
    # First optimize
    build_optimize
    
    # Apply optimizations
    apply_optimizations
    
    # Commit changes
    git add -A
    git commit -m "chore: production build"
    git push origin genspark_ai_developer
    
    print_success "Deployed to production!"
    print_info "Visit: https://github.com/abmuponly-official/framex-website"
}

# Check file sizes
check_sizes() {
    print_info "Checking file sizes..."
    echo -e "\n${YELLOW}CSS Files:${NC}"
    du -h css/*.css | sort -h
    
    echo -e "\n${YELLOW}JS Files:${NC}"
    du -h js/*.js | sort -h
    
    echo -e "\n${YELLOW}HTML Files:${NC}"
    du -h *.html | sort -h
    
    echo -e "\n${GREEN}Total Size:${NC}"
    du -sh .
}

# Generate performance report
generate_report() {
    print_info "Generating performance report..."
    
    cat > performance-analysis.md << 'EOF'
# FrameX Website Performance Analysis

## Current Optimizations

### ✅ Implemented
- Service Worker for offline support
- Image lazy loading with WebP support
- Font optimization with preloading
- CSS/JS minification
- Critical CSS extraction
- Core Web Vitals monitoring
- PWA manifest

### 📊 File Size Comparison

#### CSS Files
EOF
    
    echo '```' >> performance-analysis.md
    for file in css/*.css; do
        if [[ ! "$file" == *.min.css ]]; then
            minfile="${file%.css}.min.css"
            if [ -f "$minfile" ]; then
                orig_size=$(du -b "$file" | cut -f1)
                min_size=$(du -b "$minfile" | cut -f1)
                reduction=$((100 - (min_size * 100 / orig_size)))
                echo "$(basename $file): $(du -h $file | cut -f1) → $(du -h $minfile | cut -f1) (-$reduction%)" >> performance-analysis.md
            fi
        fi
    done
    echo '```' >> performance-analysis.md
    
    echo -e "\n#### JS Files" >> performance-analysis.md
    echo '```' >> performance-analysis.md
    for file in js/*.js; do
        if [[ ! "$file" == *.min.js ]]; then
            minfile="${file%.js}.min.js"
            if [ -f "$minfile" ]; then
                orig_size=$(du -b "$file" | cut -f1)
                min_size=$(du -b "$minfile" | cut -f1)
                reduction=$((100 - (min_size * 100 / orig_size)))
                echo "$(basename $file): $(du -h $file | cut -f1) → $(du -h $minfile | cut -f1) (-$reduction%)" >> performance-analysis.md
            fi
        fi
    done
    echo '```' >> performance-analysis.md
    
    print_success "Performance analysis saved to performance-analysis.md"
}

# Install dependencies
install_dependencies() {
    print_info "Installing dependencies..."
    
    # Check for Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js not installed!"
        return 1
    fi
    
    # Install npm packages if package.json exists
    if [ -f "package.json" ]; then
        npm install
    fi
    
    # Install Python packages if requirements.txt exists
    if [ -f "requirements.txt" ]; then
        pip install -r requirements.txt
    fi
    
    print_success "Dependencies installed!"
}

# Clean build files
clean_build() {
    print_warning "Cleaning build files..."
    
    # Remove minified files
    rm -f css/*.min.css
    rm -f js/*.min.js
    rm -f *.optimized.html
    
    # Remove generated files
    rm -f manifest.json
    rm -f sitemap.xml
    rm -f performance-report.html
    rm -f performance-analysis.md
    
    print_success "Build files cleaned!"
}

# Test mobile view
test_mobile() {
    print_info "Testing mobile view..."
    print_warning "Opening Chrome DevTools in mobile mode..."
    
    # Create a simple HTML file with mobile testing instructions
    cat > mobile-test.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Mobile Testing Guide</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .instruction { margin: 20px 0; padding: 15px; background: #f0f0f0; border-left: 4px solid #ff6b35; }
    </style>
</head>
<body>
    <h1>📱 Mobile Testing Guide for FrameX</h1>
    <div class="instruction">
        <h2>Steps to test mobile view:</h2>
        <ol>
            <li>Open Chrome/Edge browser</li>
            <li>Navigate to: <a href="http://localhost:8000" target="_blank">http://localhost:8000</a></li>
            <li>Press F12 to open DevTools</li>
            <li>Click the device toggle button (or press Ctrl+Shift+M)</li>
            <li>Select a mobile device from the dropdown</li>
            <li>Test different pages and interactions</li>
        </ol>
    </div>
    <div class="instruction">
        <h2>Test these devices:</h2>
        <ul>
            <li>iPhone SE (375 x 667)</li>
            <li>iPhone 12 Pro (390 x 844)</li>
            <li>Samsung Galaxy S20 (360 x 800)</li>
            <li>iPad (768 x 1024)</li>
        </ul>
    </div>
    <div class="instruction">
        <h2>Check for:</h2>
        <ul>
            <li>✅ Responsive layout</li>
            <li>✅ Touch targets size (min 44x44px)</li>
            <li>✅ Font readability</li>
            <li>✅ Image loading</li>
            <li>✅ Navigation menu</li>
            <li>✅ Form inputs</li>
        </ul>
    </div>
</body>
</html>
EOF
    
    print_success "Mobile testing guide created: mobile-test.html"
    print_info "Open this file in your browser for testing instructions"
}

# Main loop
while true; do
    show_menu
    read -p "Enter your choice: " choice
    
    case $choice in
        1) build_optimize ;;
        2) start_server ;;
        3) run_tests ;;
        4) apply_optimizations ;;
        5) sync_github ;;
        6) create_commit ;;
        7) deploy_production ;;
        8) check_sizes ;;
        9) generate_report ;;
        10) install_dependencies ;;
        11) clean_build ;;
        12) test_mobile ;;
        0) print_info "Goodbye!"; exit 0 ;;
        *) print_error "Invalid choice. Please try again." ;;
    esac
    
    echo -e "\nPress Enter to continue..."
    read
done