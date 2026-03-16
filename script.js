document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle - desktop
    const themeToggle = document.querySelector('.theme-toggle');
    // Theme toggle - mobile
    const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Intersection Observer for scroll animations - Apple Style
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add both classes for compatibility
                entry.target.classList.add('visible');
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.classList.add(`animate-delay-${(index % 4) + 1}`);
        observer.observe(item);
    });

    // Observe player cards with staggered delays
    document.querySelectorAll('.player-card').forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.classList.add(`animate-delay-${(index % 4) + 1}`);
        observer.observe(card);
    });

    // Observe impact cards with staggered delays
    document.querySelectorAll('.impact-card').forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.classList.add(`animate-delay-${(index % 4) + 1}`);
        observer.observe(card);
    });

    // Observe section containers
    document.querySelectorAll('.section-container').forEach((section, index) => {
        section.classList.add('animate-on-scroll');
        section.classList.add(`animate-delay-${(index % 4) + 1}`);
        observer.observe(section);
    });

    // Observe stat boxes
    document.querySelectorAll('.stat-box').forEach((box, index) => {
        box.classList.add('animate-on-scroll');
        box.classList.add(`animate-delay-${(index % 3) + 1}`);
        observer.observe(box);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero (disabled on mobile for performance)
    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isMobile && !prefersReducedMotion) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // Navbar appears on scroll - Apple Style
    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        // Show navbar after scrolling down 100px
        if (currentScrollY > 100) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // Initial check
    if (window.scrollY > 100) {
        navbar.classList.add('visible');
    }

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Animate counters when visible
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    const text = statNumber.textContent;
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    if (num) {
                        statNumber.textContent = '0';
                        animateCounter(statNumber, num);
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        counterObserver.observe(stat);
    });
});
