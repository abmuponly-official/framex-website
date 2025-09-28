#!/usr/bin/env node

/**
 * Update Vietnamese Comparison Table Content
 * Replaces only the Vietnamese version with new content and styling
 * Date: 2025-09-28
 */

const fs = require('fs').promises;

class ViTableUpdater {
    constructor() {
        this.viTableHTML = `                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th scope="col" data-lang="compare-feature"><strong>Tính năng</strong></th>
                            <th scope="col"><strong>FrameX STARTER</strong></th>
                            <th scope="col" class="featured"><strong>FrameX SMART</strong></th>
                            <th scope="col"><strong>FrameX PREMIUM</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" data-lang="compare-area"><strong>Diện tích phù hợp</strong></td>
                            <td>< 150 m² (một tầng)<br>hoặc 50 m²/tầng (2–3 tầng)</td>
                            <td class="featured">< 225 m² (một tầng)<br>hoặc 75 m²/tầng (2–3 tầng)</td>
                            <td>> 300 m² sàn<br>hoặc > 150 m²/tầng (2 tầng)</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-structure"><strong>Kết cấu thép</strong></td>
                            <td>Tiêu chuẩn</td>
                            <td class="featured">Nâng cao, có thể tùy biến theo yêu cầu</td>
                            <td>Cao cấp, thiết kế riêng hoàn toàn</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-waterproof"><strong>Chống thấm</strong></td>
                            <td>Cơ bản</td>
                            <td class="featured">Cơ bản</td>
                            <td>Nâng cao</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-insulation"><strong>Cách nhiệt</strong></td>
                            <td>Cơ bản</td>
                            <td class="featured">Cơ bản</td>
                            <td>Nâng cao</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-smart"><strong>Tiện ích thông minh (Smart Home)</strong></td>
                            <td>–</td>
                            <td class="featured">Cơ bản<br>(chống trộm, báo cháy, camera, internet)</td>
                            <td>Nâng cao<br>tùy chỉnh theo yêu cầu riêng</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-fireproof"><strong>Chống cháy</strong></td>
                            <td>–</td>
                            <td class="featured">–</td>
                            <td>Kết cấu chống cháy đầy đủ</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-artistic"><strong>Chi tiết sắt mỹ thuật</strong><br>(cầu thang, lan can, chi tiết đặc biệt)</td>
                            <td>Cầu thang đơn giản</td>
                            <td class="featured">Cầu thang đơn giản</td>
                            <td>Cầu thang + lan can + các chi tiết đặc biệt</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-warranty"><strong>Bảo hành</strong></td>
                            <td>15 năm</td>
                            <td class="featured">15 năm</td>
                            <td>20 năm</td>
                        </tr>
                        <tr>
                            <td scope="row" data-lang="compare-target"><strong>Khách hàng mục tiêu</strong></td>
                            <td>Nhà phố nhỏ, công trình phổ thông</td>
                            <td class="featured">Villa nhỏ, cần tiện ích & cá nhân hóa</td>
                            <td>Biệt thự lớn, công trình đặc biệt</td>
                        </tr>
                    </tbody>
                </table>`;

        this.viData = {
            "Diện tích phù hợp": {
                starter: "< 150 m² (một tầng) hoặc 50 m²/tầng (2–3 tầng)",
                smart: "< 225 m² (một tầng) hoặc 75 m²/tầng (2–3 tầng)",
                premium: "> 300 m² sàn hoặc > 150 m²/tầng (2 tầng)"
            },
            "Kết cấu thép": {
                starter: "Tiêu chuẩn",
                smart: "Nâng cao, có thể tùy biến theo yêu cầu",
                premium: "Cao cấp, thiết kế riêng hoàn toàn"
            },
            "Chống thấm": {
                starter: "Cơ bản",
                smart: "Cơ bản",
                premium: "Nâng cao"
            },
            "Cách nhiệt": {
                starter: "Cơ bản",
                smart: "Cơ bản",
                premium: "Nâng cao"
            },
            "Tiện ích thông minh (Smart Home)": {
                starter: "–",
                smart: "Cơ bản (chống trộm, báo cháy, camera, internet)",
                premium: "Nâng cao tùy chỉnh theo yêu cầu riêng"
            },
            "Chống cháy": {
                starter: "–",
                smart: "–",
                premium: "Kết cấu chống cháy đầy đủ"
            },
            "Chi tiết sắt mỹ thuật": {
                starter: "Cầu thang đơn giản",
                smart: "Cầu thang đơn giản",
                premium: "Cầu thang + lan can + các chi tiết đặc biệt"
            },
            "Bảo hành": {
                starter: "15 năm",
                smart: "15 năm",
                premium: "20 năm"
            },
            "Khách hàng mục tiêu": {
                starter: "Nhà phố nhỏ, công trình phổ thông",
                smart: "Villa nhỏ, cần tiện ích & cá nhân hóa",
                premium: "Biệt thự lớn, công trình đặc biệt"
            }
        };
    }

    async updateProductsPage() {
        try {
            console.log('📝 Updating Vietnamese comparison table...');
            
            let content = await fs.readFile('products.html', 'utf8');
            
            // Find and replace the comparison table
            const tableStart = content.indexOf('<table class="comparison-table">');
            const tableEnd = content.indexOf('</table>', tableStart) + 8;
            
            if (tableStart === -1) {
                throw new Error('Comparison table not found');
            }
            
            // Replace with new table HTML
            content = content.substring(0, tableStart) + this.viTableHTML + content.substring(tableEnd);
            
            // Add CSS link if not present
            if (!content.includes('comparison-table-clean.css')) {
                content = content.replace(
                    '</head>',
                    '    <link rel="stylesheet" href="css/comparison-table-clean.css">\n    </head>'
                );
            }
            
            await fs.writeFile('products.html', content, 'utf8');
            console.log('✅ Updated products.html with new Vietnamese table');
            
        } catch (error) {
            console.error('❌ Error:', error.message);
        }
    }

    async saveDataModel() {
        await fs.writeFile(
            'vi-comparison-table-data.json',
            JSON.stringify(this.viData, null, 2),
            'utf8'
        );
        console.log('📊 Created vi-comparison-table-data.json');
    }

    async run() {
        await this.updateProductsPage();
        await this.saveDataModel();
        console.log('🎨 Vietnamese table update complete!');
    }
}

// Execute
new ViTableUpdater().run().catch(console.error);