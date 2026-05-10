// ===============================================
// VARIABLES GLOBALES
// ===============================================

const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

// ===============================================
// NAVEGACIÓN PRINCIPAL
// ===============================================

function showSection(sectionId) {
    // Ocultar todas las secciones
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
        
        // Scroll suave
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // Actualizar botones de navegación
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });

    // Cerrar menú móvil
    navMenu.classList.remove('active');
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.dataset.section;
        showSection(sectionId);
    });
});

// ===============================================
// BOTÓN EXPLORAR EN HERO
// ===============================================

const explorarBtn = document.getElementById('explorar-btn');
if (explorarBtn) {
    explorarBtn.addEventListener('click', () => {
        showSection('introduccion');
    });
}

// ===============================================
// MENÚ HAMBURGUESA (MÓVIL)
// ===============================================

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un botón
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===============================================
// SCROLL NAVBAR
// ===============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===============================================
// TARJETAS EXPANDIBLES (PROBLEMA)
// ===============================================

const problemaCards = document.querySelectorAll('.problema-card.expandable');

problemaCards.forEach(card => {
    const header = card.querySelector('.problema-header');
    
    header.addEventListener('click', () => {
        // Cerrar otras tarjetas
        problemaCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Toggle de la tarjeta actual
        card.classList.toggle('expanded');
    });
});

// ===============================================
// TABS DE SOLUCIÓN
// ===============================================

const solutionTabs = document.querySelectorAll('.solution-tab');
const solutionPanels = document.querySelectorAll('.solution-panel');

solutionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        
        // Actualizar tabs
        solutionTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Actualizar panels
        solutionPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        
        const activePanel = document.getElementById(`${tabName}-panel`);
        if (activePanel) {
            activePanel.classList.add('active');
        }
    });
});

// ===============================================
// ACORDEÓN DE RIESGOS
// ===============================================

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        
        // Cerrar otros acordeones
        accordionHeaders.forEach(otherHeader => {
            const otherItem = otherHeader.parentElement;
            if (otherItem !== item) {
                otherItem.classList.remove('expanded');
            }
        });
        
        // Toggle del acordeón actual
        item.classList.toggle('expanded');
    });
});

// ===============================================
// EFECTOS DE HOVER MEJORADOS
// ===============================================

const interactiveElements = document.querySelectorAll(
    '.intro-card, .issue-item, .feature-item, .dofa-card, .pestel-card, .canvas-block, .conclusion-card, .timeline-content'
);

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.35s ease';
    });
});

// ===============================================
// ANIMACIONES AL SCROLL
// ===============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos que deben animarse
const animatableElements = document.querySelectorAll(
    '.intro-card, .issue-item, .feature-item, .dofa-card, .pestel-card, .conclusion-card, .timeline-item'
);

animatableElements.forEach(element => {
    if (!element.classList.contains('fade-in')) {
        element.style.opacity = '0';
        element.style.animation = 'none';
        observer.observe(element);
    }
});

// ===============================================
// INICIALIZACIÓN
// ===============================================

// Mostrar la sección hero por defecto
document.addEventListener('DOMContentLoaded', () => {
    showSection('hero');
    
    // Agregar eventos de click a elementos interactivos
    setupInteractiveElements();
});

// ===============================================
// FUNCIONES DE UTILIDAD
// ===============================================

function setupInteractiveElements() {
    // Ripple effect para botones
    const buttons = document.querySelectorAll('.btn, .nav-btn, .solution-tab, .accordion-header');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ===============================================
// TEMAS DE ACCESIBILIDAD
// ===============================================

// Soporte para reducir movimiento
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// ===============================================
// FUNCIÓN PARA SCROLL SUAVE A SECCIONES
// ===============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===============================================
// KEYBOARD NAVIGATION
// ===============================================

document.addEventListener('keydown', (e) => {
    // Alt + número para navegar a secciones
    if (e.altKey && e.key >= '1' && e.key <= '9') {
        const btnIndex = parseInt(e.key) - 1;
        if (navButtons[btnIndex]) {
            showSection(navButtons[btnIndex].dataset.section);
        }
    }
    
    // Esc para cerrar menú móvil
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// ===============================================
// MONITOREO DE VISIBILIDAD DE SECCIONES
// ===============================================

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.section === sectionId) {
                    btn.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ===============================================
// ANIMACIONES DE CARGA
// ===============================================

function addLoadAnimation() {
    const elementsToAnimate = document.querySelectorAll(
        '.intro-card, .issue-item, .feature-item, .dofa-card, .pestel-card, .conclusion-card'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
    });
}

// Llamar cuando se carga el contenido
window.addEventListener('load', addLoadAnimation);

// ===============================================
// SOPORTE PARA MODO OSCURO (OPCIONAL)
// ===============================================

function initDarkModeToggle() {
    const darkModeToggle = document.querySelector('[data-theme-toggle]');
    
    if (!darkModeToggle) return;
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('darkMode', newTheme === 'dark');
    });
}

// Descomenta esta línea si deseas habilitar modo oscuro
// initDarkModeToggle();

// ===============================================
// ESTADÍSTICAS Y ANALÍTICA (OPCIONAL)
// ===============================================

function trackSectionView(sectionId) {
    // Puedes integrar con Google Analytics o similar
    console.log('Viewed section:', sectionId);
}

// Track cuando se ven secciones
sections.forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackSectionView(entry.target.id);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(section);
});

// ===============================================
// MEJORAS DE ACCESIBILIDAD
// ===============================================

// Agregar roles ARIA
navButtons.forEach(btn => {
    btn.setAttribute('role', 'button');
});

accordionHeaders.forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
});

// Actualizar aria-expanded cuando se expande
const updateAriaExpanded = () => {
    accordionHeaders.forEach(header => {
        const isExpanded = header.parentElement.classList.contains('expanded');
        header.setAttribute('aria-expanded', isExpanded);
    });
};

accordionHeaders.forEach(header => {
    header.addEventListener('click', updateAriaExpanded);
});

// ===============================================
// PERFORMANCE - LAZY LOADING
// ===============================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imgObserver.observe(img));
}

console.log('EquiFlow Interactive Platform v1.0.3 loaded successfully ✨ (May 10, 2026 - Timeline Fixed)');
