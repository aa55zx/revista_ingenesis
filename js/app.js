// ==========================================
// MENÚ DROPDOWN FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Agregar funcionalidad para móviles
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (toggle) {
            // Para dispositivos móviles
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Cerrar otros dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
    
    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Ajustar al redimensionar ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos con animación
document.querySelectorAll('.info-card, .publication-card, .content-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==========================================
// MENÚ STICKY
// ==========================================

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-navigation');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
});

// ==========================================
// BOTÓN SCROLL TO TOP
// ==========================================

// Crear botón scroll to top
if (!document.querySelector('.scroll-to-top')) {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #C85A1F 0%, #D86825 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top al hacer clic
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// ==========================================
// HERO BACKGROUND SLIDESHOW
// ==========================================

function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');

    if (slides.length === 0) return;

    let currentSlide = 0;

    function nextSlide() {
        // Remover clase active del slide actual
        slides[currentSlide].classList.remove('active');

        // Incrementar índice
        currentSlide = (currentSlide + 1) % slides.length;

        // Agregar clase active al nuevo slide
        slides[currentSlide].classList.add('active');
    }

    // Cambiar slide cada 5 segundos
    setInterval(nextSlide, 5000);
}

// Inicializar slideshow cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initHeroSlideshow);

// ==========================================
// BUSCADOR DE PUBLICACIONES
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationsGrid = document.getElementById('publicationsGrid');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !publicationsGrid) return;

    let currentFilter = 'all';

    // Función para filtrar publicaciones
    function filterPublications() {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = publicationsGrid.querySelectorAll('.publication-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('.publication-title')?.textContent.toLowerCase() || '';
            const authors = card.querySelector('.publication-date')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.publication-excerpt')?.textContent.toLowerCase() || '';
            const area = card.getAttribute('data-area') || '';

            const matchesSearch = title.includes(searchTerm) ||
                                 authors.includes(searchTerm) ||
                                 excerpt.includes(searchTerm);

            const matchesFilter = currentFilter === 'all' || area === currentFilter;

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Mostrar resultados
        if (searchTerm || currentFilter !== 'all') {
            searchResults.style.display = 'block';
            searchResults.textContent = `Mostrando ${visibleCount} artículo${visibleCount !== 1 ? 's' : ''}`;
        } else {
            searchResults.style.display = 'none';
        }
    }

    // Event listener para el buscador
    if (searchInput) {
        searchInput.addEventListener('input', filterPublications);

        // Efecto visual al enfocar
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#C85A1F';
            this.style.boxShadow = '0 0 0 3px rgba(200, 90, 31, 0.1)';
        });

        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
    }

    // Event listeners para botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            filterButtons.forEach(btn => {
                btn.style.background = '#f0f0f0';
                btn.style.color = '#333';
            });

            // Activar botón actual
            this.style.background = '#C85A1F';
            this.style.color = 'white';

            currentFilter = this.getAttribute('data-filter');
            filterPublications();
        });

        // Efecto hover
        button.addEventListener('mouseenter', function() {
            if (this.style.background !== 'rgb(200, 90, 31)') {
                this.style.background = '#e0e0e0';
            }
        });

        button.addEventListener('mouseleave', function() {
            if (this.style.background !== 'rgb(200, 90, 31)') {
                this.style.background = '#f0f0f0';
            }
        });
    });
});

console.log('INGÉNESIS - Sistema cargado correctamente ✓');
