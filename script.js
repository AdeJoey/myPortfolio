
                // Category switching logic
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        // Remove active class from all buttons
                        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                        // Hide all category sections
                        document.querySelectorAll('.project-category-section').forEach(sec => sec.style.display = 'none');
                        // Add active class to clicked button
                        this.classList.add('active');
                        // Show the selected category section
                        const cat = this.getAttribute('data-category');
                        document.getElementById(cat).style.display = 'block';
                    });
                });
                
                // Loading page
        window.addEventListener('DOMContentLoaded', function() {
            // Animate loading bar
            setTimeout(function() {
                document.getElementById('loading-bar').style.width = '100%';
            }, 100);
            // Hide loading page after short delay
            setTimeout(function() {
                var loadingPage = document.getElementById('loading-page');
                loadingPage.style.opacity = '0';
                setTimeout(function() {
                    loadingPage.style.display = 'none';
                }, 500);
            }, 1200);
        });


        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menu-toggle');
            const navOverlay = document.getElementById('nav-overlay');
            const closeNav = document.getElementById('close-nav');
            const navLinks = navOverlay.querySelectorAll('a');

            menuToggle.addEventListener('change', function () {
                if (menuToggle.checked) {
                    navOverlay.style.display = 'flex';
                    setTimeout(() => navOverlay.style.opacity = '1', 10);
                    document.body.style.overflow = 'hidden';
                } else {
                    navOverlay.style.opacity = '0';
                    setTimeout(() => navOverlay.style.display = 'none', 400);
                    document.body.style.overflow = '';
                }
            });

            closeNav.addEventListener('click', function () {
                menuToggle.checked = false;
                navOverlay.style.opacity = '0';
                setTimeout(() => navOverlay.style.display = 'none', 400);
                document.body.style.overflow = '';
            });

            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    menuToggle.checked = false;
                    navOverlay.style.opacity = '0';
                    setTimeout(() => navOverlay.style.display = 'none', 400);
                    document.body.style.overflow = '';
                });
            });
        });
        
        
                