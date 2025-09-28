// EDMG项目主页交互功能脚本

// 文档加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航栏功能
    initNavigation();
    
    // 初始化平滑滚动
    initSmoothScrolling();
    
    // 初始化移动端菜单
    initMobileMenu();
    
    // 初始化滚动效果
    initScrollEffects();
    
    // 初始化复制功能
    initCopyFunctionality();
    
    // 初始化动画效果
    initAnimations();
});

/**
 * 初始化导航栏功能
 * 包括滚动时导航栏样式变化和当前页面高亮
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 监听页面滚动，动态改变导航栏样式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // 更新当前活跃的导航链接
        updateActiveNavLink();
    });
}

/**
 * 更新当前活跃的导航链接
 * 根据页面滚动位置高亮对应的导航项
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    // 找到当前在视窗中的section
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // 更新导航链接的活跃状态
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * 初始化平滑滚动功能
 * 点击导航链接时平滑滚动到对应section
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // 计算目标位置（考虑导航栏高度）
                const offsetTop = targetSection.offsetTop - 70;
                
                // 平滑滚动到目标位置
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 关闭移动端菜单（如果打开的话）
                closeMobileMenu();
            }
        });
    });
}

/**
 * 初始化移动端菜单功能
 * 处理汉堡菜单的开关和响应式导航
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // 点击汉堡菜单切换显示状态
        hamburger.addEventListener('click', function() {
            toggleMobileMenu();
        });
        
        // 点击菜单项时关闭移动端菜单
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
        
        // 点击页面其他地方时关闭菜单
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

/**
 * 切换移动端菜单显示状态
 */
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // 添加移动端菜单样式（通过CSS类控制）
    if (navMenu.classList.contains('active')) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = 'white';
        navMenu.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navMenu.style.padding = '1rem';
        navMenu.style.gap = '1rem';
    }
}

/**
 * 关闭移动端菜单
 */
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navMenu.style.display = '';
}

/**
 * 初始化滚动效果
 * 包括元素进入视窗时的动画效果
 */
function initScrollEffects() {
    // 创建Intersection Observer来监听元素进入视窗
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.method-card, .code-card, .results-table');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * 初始化复制功能
 * 为引用信息添加一键复制功能
 */
function initCopyFunctionality() {
    // 创建全局复制函数
    window.copyToClipboard = function() {
        const citationText = `@article{edmg2024,
  title={EDMG: Enhanced Dynamic Motion Generation},
  author={neymar277},
  journal={Computer Vision and Pattern Recognition},
  year={2024},
  volume={XX},
  pages={XXX-XXX}
}`;
        
        // 使用现代的Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(citationText).then(function() {
                showCopySuccess();
            }).catch(function(err) {
                console.error('复制失败:', err);
                fallbackCopyToClipboard(citationText);
            });
        } else {
            // 备用复制方法
            fallbackCopyToClipboard(citationText);
        }
    };
}

/**
 * 备用复制到剪贴板方法
 * 用于不支持Clipboard API的浏览器
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动选择文本复制');
    } finally {
        document.body.removeChild(textArea);
    }
}

/**
 * 显示复制成功提示
 */
function showCopySuccess() {
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    
    // 临时改变按钮文本和样式
    copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
    copyBtn.style.backgroundColor = '#10b981';
    
    // 2秒后恢复原状
    setTimeout(function() {
        copyBtn.innerHTML = originalText;
        copyBtn.style.backgroundColor = '';
    }, 2000);
}

/**
 * 初始化页面动画效果
 * 为页面元素添加进入动画
 */
function initAnimations() {
    // 为CSS添加动画类
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .nav-menu.active {
            display: flex !important;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        /* 移动端菜单样式 */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
            
            .nav-menu.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background-color: white;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                padding: 1rem;
                gap: 1rem;
                z-index: 999;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * 工具函数：节流函数
 * 用于优化滚动事件性能
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 工具函数：防抖函数
 * 用于优化resize事件性能
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 页面性能优化：使用节流优化滚动事件
window.addEventListener('scroll', throttle(function() {
    // 滚动相关的性能优化处理
}, 100));

// 窗口大小改变时的响应处理
window.addEventListener('resize', debounce(function() {
    // 确保移动端菜单在窗口大小改变时正确关闭
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}, 250));

// 页面加载完成后的额外初始化
window.addEventListener('load', function() {
    // 预加载一些可能需要的资源
    preloadResources();
    
    // 添加页面加载完成的动画效果
    document.body.classList.add('loaded');
});

/**
 * 预加载资源
 * 提升用户体验
 */
function preloadResources() {
    // 这里可以预加载一些图片或其他资源
    // 例如：预加载GitHub头像、项目截图等
    const imagesToPreload = [
        // 'path/to/image1.jpg',
        // 'path/to/image2.jpg'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 导出一些可能在其他地方需要用到的函数
window.EDMGUtils = {
    copyToClipboard: window.copyToClipboard,
    showCopySuccess: showCopySuccess,
    toggleMobileMenu: toggleMobileMenu,
    closeMobileMenu: closeMobileMenu
};
