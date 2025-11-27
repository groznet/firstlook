
// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    
    // Create particles
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.position = 'fixed';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.pointerEvents = 'none';
        particlesContainer.style.zIndex = '1';
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 5 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.opacity = Math.random() * 0.8;
            
            particlesContainer.appendChild(particle);
            
            // Animate particle
            gsap.to(particle, {
                y: -100,
                x: Math.random() * 100 - 50,
                rotation: Math.random() * 360,
                duration: Math.random() * 10 + 10,
                repeat: -1,
                ease: "none"
            });
        }
    }
    
    createParticles();
    
    // Hero animation
    gsap.from('nav', { duration: 1, y: -50, opacity: 0 });
    gsap.to('.hero-height h1', { duration: 2, text: "FIRSTLOOK", ease: "none" });
    gsap.from('.hero-height p', { duration: 1.2, y: 50, opacity: 0, delay: 0.5 });
    gsap.from('.hero-height .flex', { duration: 1.2, y: 50, opacity: 0, delay: 0.7 });
    
    // Stats animation
    gsap.from('.stat-number', {
        scrollTrigger: {
            trigger: '.stat-number',
            start: 'top 80%'
        },
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
    
    // Services section animation
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '#services',
            start: 'top 70%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
    
    // Testimonials animation
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonial-card',
            start: 'top 80%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
    });
    
    // Contact form animation
    gsap.from('#contact form', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power2.out"
    });
    
    gsap.from('#contact .space-y-8', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power2.out"
    });

    // Floating shapes rotation
    gsap.to('.floating-shape', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    // Morphing shapes rotation
    gsap.to('.morphing-shape', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
    });

    
});


// Portfolio
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

function updatePortfolio(filter) {
    // remove active from all
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

    let count = 0;

    items.forEach(item => {
        const category = item.getAttribute('data-category');

        // show ALL
        if (filter === 'all') {
            item.style.display = '';
            item.style.opacity = 0;
            item.style.transform = 'scale(0.92)';
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'scale(1)';
            }, 50);
            return;
        }

        // show only selected category (max 3)
        if (category === filter && count < 3) {
            item.style.display = '';
            item.style.opacity = 0;
            item.style.transform = 'scale(0.92)';
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'scale(1)';
            }, 50);

            count++;
        } else {
            item.style.display = 'none';
        }
    });
}

// add listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        updatePortfolio(btn.getAttribute('data-filter'));
    });
});

// default: show all
updatePortfolio('all');
