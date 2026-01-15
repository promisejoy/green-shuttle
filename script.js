// Mobile Menu Toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobileNav').classList.remove('active');
                document.querySelector('#mobileMenuBtn i').classList.remove('fa-times');
                document.querySelector('#mobileMenuBtn i').classList.add('fa-bars');
            });
        });
        
        // Scroll Animation
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
            
            // Show/hide scroll buttons
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollToTopBtn = document.getElementById('scrollToTop');
            const scrollToBottomBtn = document.getElementById('scrollToBottom');
            
            // Show top button when scrolled down 300px
            if (scrollTop > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
            
            // Show bottom button when not at bottom (100px from bottom)
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrolledToBottom = (windowHeight + scrollTop) >= (documentHeight - 100);
            
            if (!scrolledToBottom) {
                scrollToBottomBtn.classList.add('visible');
            } else {
                scrollToBottomBtn.classList.remove('visible');
            }
        }
        
        // Initial check on page load
        window.addEventListener('load', animateOnScroll);
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileNav = document.getElementById('mobileNav');
                    if (mobileNav.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                        document.querySelector('#mobileMenuBtn i').classList.remove('fa-times');
                        document.querySelector('#mobileMenuBtn i').classList.add('fa-bars');
                    }
                    
                    // Smooth scroll
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animate scroll indicator
        function animateScrollIndicator() {
            const indicator = document.querySelector('.scroll-indicator-inner');
            if (indicator) {
                indicator.style.transform = 'translateY(0)';
                setTimeout(() => {
                    indicator.style.transform = 'translateY(10px)';
                }, 1000);
                setTimeout(() => {
                    indicator.style.transform = 'translateY(0)';
                }, 2000);
            }
        }
        
        // Start scroll indicator animation
        setInterval(animateScrollIndicator, 2000);
        
        // Hero animations on load
        window.addEventListener('load', function() {
            const heroElements = document.querySelectorAll('.hero .animate-on-scroll');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 200);
            });
        });
        
        // Governor section animation on load
        window.addEventListener('load', function() {
            const governorSection = document.querySelector('.governor-section');
            if (governorSection) {
                setTimeout(() => {
                    governorSection.classList.add('visible');
                }, 100);
            }
        });
        
        // Scroll to Top Functionality
        document.getElementById('scrollToTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Scroll to Bottom Functionality
        document.getElementById('scrollToBottom').addEventListener('click', function() {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        });
        
        // Keyboard shortcuts for scroll buttons
        document.addEventListener('keydown', function(event) {
            // Ctrl + Up Arrow for scroll to top
            if (event.ctrlKey && event.key === 'ArrowUp') {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // Ctrl + Down Arrow for scroll to bottom
            if (event.ctrlKey && event.key === 'ArrowDown') {
                event.preventDefault();
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });