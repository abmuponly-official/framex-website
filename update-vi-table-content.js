#!/usr/bin/env node

/**
 * Update Vietnamese Table Content Only
 * Preserves design, updates content for VI locale
 * Date: 2025-09-28
 */

const fs = require('fs').promises;

async function updateVietnameseTable() {
    console.log('📝 Updating Vietnamese table content...');
    
    const newViTableHTML = `            <div class="comparison-table-wrapper">
                <table class="fx-table comparison-table" role="table" aria-label="So sánh sản phẩm FrameX">
                    <caption class="sr-only">Bảng so sánh các gói sản phẩm FrameX: Starter, Smart và Premium</caption>
                    <thead>
                        <tr>
                            <th scope="col"><strong>Tính năng</strong></th>
                            <th scope="col"><strong>FrameX STARTER</strong></th>
                            <th scope="col" class="featured-col"><strong>FrameX SMART</strong></th>
                            <th scope="col"><strong>FrameX PREMIUM</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><strong>Diện tích phù hợp</strong></th>
                            <td>&lt; 150 m² (một tầng)<br>hoặc 50 m²/tầng (2–3 tầng)</td>
                            <td class="featured-col">&lt; 225 m² (một tầng)<br>hoặc 75 m²/tầng (2–3 tầng)</td>
                            <td>&gt; 300 m² sàn<br>hoặc &gt; 150 m²/tầng (2 tầng)</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Kết cấu thép</strong></th>
                            <td>Tiêu chuẩn</td>
                            <td class="featured-col">Nâng cao, có thể tùy biến theo yêu cầu</td>
                            <td>Cao cấp, thiết kế riêng hoàn toàn</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Chống thấm</strong></th>
                            <td>Cơ bản</td>
                            <td class="featured-col">Cơ bản</td>
                            <td>Nâng cao</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Cách nhiệt</strong></th>
                            <td>Cơ bản</td>
                            <td class="featured-col">Cơ bản</td>
                            <td>Nâng cao</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Tiện ích thông minh (Smart Home)</strong></th>
                            <td><span class="empty-value">–</span></td>
                            <td class="featured-col">Cơ bản<br>(chống trộm, báo cháy, camera, internet)</td>
                            <td>Nâng cao<br>tùy chỉnh theo yêu cầu riêng</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Chống cháy</strong></th>
                            <td><span class="empty-value">–</span></td>
                            <td class="featured-col"><span class="empty-value">–</span></td>
                            <td>Kết cấu chống cháy đầy đủ</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Chi tiết sắt mỹ thuật</strong><br>(cầu thang, lan can, chi tiết đặc biệt)</th>
                            <td>Cầu thang đơn giản</td>
                            <td class="featured-col">Cầu thang đơn giản</td>
                            <td>Cầu thang + lan can + các chi tiết đặc biệt</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Bảo hành</strong></th>
                            <td>15 năm</td>
                            <td class="featured-col">15 năm</td>
                            <td>20 năm</td>
                        </tr>
                        <tr>
                            <th scope="row"><strong>Khách hàng mục tiêu</strong></th>
                            <td>Nhà phố nhỏ, công trình phổ thông</td>
                            <td class="featured-col">Villa nhỏ, cần tiện ích &amp; cá nhân hóa</td>
                            <td>Biệt thự lớn, công trình đặc biệt</td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
    
    try {
        // Update products.html
        let content = await fs.readFile('products.html', 'utf8');
        
        // Find and replace the comparison table
        const tableStart = content.indexOf('<div class="comparison-table-wrapper">');
        const tableEnd = content.indexOf('</div>', 
            content.indexOf('</table>', tableStart)) + 6;
        
        if (tableStart === -1) {
            throw new Error('Table wrapper not found');
        }
        
        content = content.substring(0, tableStart) + 
                 newViTableHTML + 
                 content.substring(tableEnd);
        
        await fs.writeFile('products.html', content, 'utf8');
        
        console.log('✅ Updated Vietnamese table content');
        
        // Create data model
        const viDataModel = {
            features: [
                {
                    name: "Diện tích phù hợp",
                    starter: "< 150 m² (một tầng) hoặc 50 m²/tầng (2–3 tầng)",
                    smart: "< 225 m² (một tầng) hoặc 75 m²/tầng (2–3 tầng)",
                    premium: "> 300 m² sàn hoặc > 150 m²/tầng (2 tầng)"
                },
                {
                    name: "Kết cấu thép",
                    starter: "Tiêu chuẩn",
                    smart: "Nâng cao, có thể tùy biến theo yêu cầu",
                    premium: "Cao cấp, thiết kế riêng hoàn toàn"
                },
                {
                    name: "Chống thấm",
                    starter: "Cơ bản",
                    smart: "Cơ bản",
                    premium: "Nâng cao"
                },
                {
                    name: "Cách nhiệt",
                    starter: "Cơ bản",
                    smart: "Cơ bản",
                    premium: "Nâng cao"
                },
                {
                    name: "Tiện ích thông minh (Smart Home)",
                    starter: "–",
                    smart: "Cơ bản (chống trộm, báo cháy, camera, internet)",
                    premium: "Nâng cao tùy chỉnh theo yêu cầu riêng"
                },
                {
                    name: "Chống cháy",
                    starter: "–",
                    smart: "–",
                    premium: "Kết cấu chống cháy đầy đủ"
                },
                {
                    name: "Chi tiết sắt mỹ thuật",
                    subtitle: "(cầu thang, lan can, chi tiết đặc biệt)",
                    starter: "Cầu thang đơn giản",
                    smart: "Cầu thang đơn giản",
                    premium: "Cầu thang + lan can + các chi tiết đặc biệt"
                },
                {
                    name: "Bảo hành",
                    starter: "15 năm",
                    smart: "15 năm",
                    premium: "20 năm"
                },
                {
                    name: "Khách hàng mục tiêu",
                    starter: "Nhà phố nhỏ, công trình phổ thông",
                    smart: "Villa nhỏ, cần tiện ích & cá nhân hóa",
                    premium: "Biệt thự lớn, công trình đặc biệt"
                }
            ]
        };
        
        await fs.writeFile(
            'vi-table-data-model.json',
            JSON.stringify(viDataModel, null, 2),
            'utf8'
        );
        
        console.log('📊 Created vi-table-data-model.json');
        console.log('✅ Vietnamese table update complete!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

updateVietnameseTable().catch(console.error);