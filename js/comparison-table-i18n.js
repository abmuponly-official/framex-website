/**
 * Comparison Table Internationalization Handler
 * Manages language switching for the comparison table content
 * Date: 2025-09-28
 */

(function() {
    'use strict';

    // Table content in both languages
    const tableContent = {
        vi: {
            headers: {
                feature: 'Tính năng',
                starter: 'FrameX STARTER',
                smart: 'FrameX SMART',
                premium: 'FrameX PREMIUM'
            },
            features: {
                'compare-area': 'Diện tích phù hợp',
                'compare-structure': 'Kết cấu thép (Steel Structure)',
                'compare-waterproof': 'Chống thấm (Waterproofing)',
                'compare-insulation': 'Cách nhiệt (Insulation)',
                'compare-smart': 'Smart Home / tiện ích thông minh',
                'compare-fireproof': 'Chống cháy (Fire Protection)',
                'compare-artistic': 'Chi tiết sắt mỹ thuật (Artistic Steel: cầu thang, lan can, chi tiết đặc biệt)',
                'compare-warranty': 'Bảo hành',
                'compare-target': 'Đối tượng khách hàng mục tiêu'
            },
            data: {
                'compare-area': {
                    starter: '< 150 m² (một tầng)<br>hoặc 50 m²/tầng nếu 2-3 tầng',
                    smart: '< 225 m² (một tầng)<br>hoặc 75 m²/tầng nếu 2-3 tầng',
                    premium: '> 300 m² sàn<br>hoặc > 150 m²/tầng (2 tầng)'
                },
                'compare-structure': {
                    starter: 'Tiêu chuẩn',
                    smart: 'Nâng cao, có thể tùy biến theo yêu cầu',
                    premium: 'Cao cấp, thiết kế riêng hoàn toàn'
                },
                'compare-waterproof': {
                    starter: 'Cơ bản',
                    smart: 'Cơ bản',
                    premium: 'Nâng cao'
                },
                'compare-insulation': {
                    starter: 'Cơ bản',
                    smart: 'Cơ bản',
                    premium: 'Nâng cao'
                },
                'compare-smart': {
                    starter: '–',
                    smart: 'Cơ bản (bao gồm chống trộm, báo cháy, camera, internet)',
                    premium: 'Nâng cao — tùy chỉnh theo yêu cầu riêng'
                },
                'compare-fireproof': {
                    starter: '–',
                    smart: '–',
                    premium: 'Kết cấu chống cháy đầy đủ'
                },
                'compare-artistic': {
                    starter: 'Cầu thang đơn giản',
                    smart: 'Cầu thang đơn giản',
                    premium: 'Cầu thang + lan can + các chi tiết đặc biệt'
                },
                'compare-warranty': {
                    starter: '15 năm',
                    smart: '15 năm',
                    premium: '20 năm'
                },
                'compare-target': {
                    starter: 'Nhà phố nhỏ, công trình phổ thông',
                    smart: 'Villa nhỏ, cần tiện ích & cá nhân hóa',
                    premium: 'Biệt thự lớn, công trình đặc biệt'
                }
            }
        },
        en: {
            headers: {
                feature: 'Feature',
                starter: 'FrameX STARTER',
                smart: 'FrameX SMART',
                premium: 'FrameX PREMIUM'
            },
            features: {
                'compare-area': 'Area',
                'compare-structure': 'Steel Structure',
                'compare-waterproof': 'Waterproofing',
                'compare-insulation': 'Insulation',
                'compare-smart': 'Smart Home',
                'compare-fireproof': 'Fire Protection',
                'compare-artistic': 'Artistic Steel',
                'compare-warranty': 'Warranty',
                'compare-target': 'Target Customer'
            },
            data: {
                'compare-area': {
                    starter: '<150m² (1 floor)<br>50m²/floor (2–3 floors)',
                    smart: '<225m² (1 floor)<br>75m²/floor (2–3 floors)',
                    premium: '>300m² total floor area<br>>150m²/floor (2 floors)'
                },
                'compare-structure': {
                    starter: 'Standard',
                    smart: 'Advanced, customizable',
                    premium: 'Premium, custom-designed'
                },
                'compare-waterproof': {
                    starter: 'Basic',
                    smart: 'Basic',
                    premium: 'Advanced'
                },
                'compare-insulation': {
                    starter: 'Basic',
                    smart: 'Basic',
                    premium: 'Advanced'
                },
                'compare-smart': {
                    starter: '–',
                    smart: 'Basic<br>(anti-theft, fire alarm, camera, internet)',
                    premium: 'Advanced<br>(customized upon request)'
                },
                'compare-fireproof': {
                    starter: '–',
                    smart: '–',
                    premium: 'Fire-resistant structure'
                },
                'compare-artistic': {
                    starter: 'Simple staircase',
                    smart: 'Simple staircase',
                    premium: 'Staircase, railing, and special details'
                },
                'compare-warranty': {
                    starter: '15 years',
                    smart: '15 years',
                    premium: '20 years'
                },
                'compare-target': {
                    starter: 'Small townhouses<br>General-purpose projects',
                    smart: 'Small villas<br>Seeking convenience & personalization',
                    premium: 'Large villas<br>Special projects'
                }
            }
        }
    };

    // Function to detect current language
    function getCurrentLanguage() {
        // Check HTML lang attribute
        const htmlLang = document.documentElement.getAttribute('lang');
        if (htmlLang) {
            return htmlLang.toLowerCase().startsWith('en') ? 'en' : 'vi';
        }
        
        // Check body class
        if (document.body.classList.contains('lang-en')) {
            return 'en';
        }
        if (document.body.classList.contains('lang-vi')) {
            return 'vi';
        }
        
        // Default to Vietnamese
        return 'vi';
    }

    // Function to update table content based on language
    function updateTableContent(lang) {
        const table = document.querySelector('.comparison-table');
        if (!table) return;

        const content = tableContent[lang];
        if (!content) return;

        // Update feature column cells
        const featureCells = table.querySelectorAll('td[data-lang]');
        featureCells.forEach(cell => {
            const dataLang = cell.getAttribute('data-lang');
            if (content.features[dataLang]) {
                // Update the feature name
                cell.textContent = content.features[dataLang];
                
                // Update the corresponding data cells in the same row
                const row = cell.parentElement;
                const cells = row.querySelectorAll('td');
                
                if (cells.length >= 4 && content.data[dataLang]) {
                    cells[1].innerHTML = content.data[dataLang].starter;
                    cells[2].innerHTML = content.data[dataLang].smart;
                    cells[3].innerHTML = content.data[dataLang].premium;
                }
            }
        });

        // Update header if needed
        const headerCells = table.querySelectorAll('thead th');
        if (headerCells.length >= 4) {
            headerCells[0].textContent = content.headers.feature;
            // Keep product names as-is (they're brand names)
        }
    }

    // Function to observe language changes
    function observeLanguageChanges() {
        // Watch for changes to html lang attribute
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
                    updateTableContent(getCurrentLanguage());
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang']
        });

        // Watch for body class changes
        const bodyObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    updateTableContent(getCurrentLanguage());
                }
            });
        });

        bodyObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
        updateTableContent(getCurrentLanguage());
        observeLanguageChanges();
    });

    // Also update if language switcher is used
    document.addEventListener('languageChanged', (e) => {
        const newLang = e.detail.language || getCurrentLanguage();
        updateTableContent(newLang);
    });

    // Expose API for manual language switching
    window.ComparisonTableI18n = {
        setLanguage: updateTableContent,
        getCurrentLanguage: getCurrentLanguage,
        tableContent: tableContent
    };
})();