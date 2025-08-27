// Main JavaScript for Jackboys Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initAudioPlayer();
    initScrollEffects();
    initMobileMenu();
    initTrackInteractions();
    initMerchInteractions();
    initTourInteractions();
});

// Navigation functionality
function initNavigation() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background on scroll
        if (scrollTop > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }

        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .logo-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Audio player functionality
function initAudioPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressFill = document.getElementById('progressFill');
    const timeCurrent = document.getElementById('timeCurrent');
    const timeTotal = document.getElementById('timeTotal');
    
    let isPlaying = false;
    let currentTime = 0;
    let duration = 145; // 2:45 in seconds
    
    // Show audio player when music is played
    function showAudioPlayer() {
        audioPlayer.classList.add('active');
    }
    
    // Hide audio player
    function hideAudioPlayer() {
        audioPlayer.classList.remove('active');
    }
    
    // Format time in MM:SS
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Update progress bar
    function updateProgress() {
        if (isPlaying) {
            currentTime += 0.1;
            if (currentTime >= duration) {
                currentTime = 0;
                isPlaying = false;
                playPauseBtn.innerHTML = '<span class="play-icon">▶</span>';
            }
            
            const progress = (currentTime / duration) * 100;
            progressFill.style.width = progress + '%';
            timeCurrent.textContent = formatTime(currentTime);
        }
    }
    
    // Play/pause functionality
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            if (isPlaying) {
                isPlaying = false;
                this.innerHTML = '<span class="play-icon">▶</span>';
            } else {
                isPlaying = true;
                this.innerHTML = '<span class="play-icon">⏸</span>';
                showAudioPlayer();
            }
        });
    }
    
    // Progress bar click functionality
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percentage = clickX / width;
            
            currentTime = percentage * duration;
            const progress = (currentTime / duration) * 100;
            progressFill.style.width = progress + '%';
            timeCurrent.textContent = formatTime(currentTime);
        });
    }
    
    // Update progress every 100ms
    setInterval(updateProgress, 100);
    
    // Initialize time display
    timeTotal.textContent = formatTime(duration);
}

// Track interactions
function initTrackInteractions() {
    const trackItems = document.querySelectorAll('.track-item');
    const playBtn = document.querySelector('.play-btn');
    
    trackItems.forEach((track, index) => {
        track.addEventListener('click', function() {
            // Remove active class from all tracks
            trackItems.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked track
            this.classList.add('active');
            
            // Update audio player info
            const trackName = this.querySelector('.track-title').textContent;
            const trackNameElement = document.querySelector('.track-name');
            if (trackNameElement) {
                trackNameElement.textContent = trackName;
            }
            
            // Show audio player
            const audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.classList.add('active');
            
            // Start playing
            const playPauseBtn = document.getElementById('playPauseBtn');
            if (playPauseBtn) {
                playPauseBtn.innerHTML = '<span class="play-icon">⏸</span>';
            }
        });
    });
    
    // Album play button
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            const audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.classList.add('active');
            
            const playPauseBtn = document.getElementById('playPauseBtn');
            if (playPauseBtn) {
                playPauseBtn.innerHTML = '<span class="play-icon">⏸</span>';
            }
        });
    }
}

// Merch interactions
function initMerchInteractions() {
    const merchButtons = document.querySelectorAll('.btn-merch');
    
    merchButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add to cart animation
            this.textContent = 'Added!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = '#333333';
            }, 2000);
        });
    });
}

// Tour interactions
function initTourInteractions() {
    const ticketButtons = document.querySelectorAll('.btn-ticket');
    
    ticketButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ticket purchase simulation
            this.textContent = 'Redirecting...';
            this.style.backgroundColor = '#666666';
            
            setTimeout(() => {
                alert('Redirecting to ticket vendor...');
                this.textContent = 'Get Tickets';
                this.style.backgroundColor = '#ff0000';
            }, 1000);
        });
    });
}

// Scroll effects and animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-header, .music-content, .merch-item, .tour-date');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Hero section parallax effect
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize hero parallax
initHeroParallax();

// Utility functions
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

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Recalculate any layout-dependent values here
}, 250));

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Error handling for missing assets
function handleMissingAssets() {
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Image failed to load:', this.src);
        });
    });
    
    videos.forEach(video => {
        video.addEventListener('error', function() {
            console.warn('Video failed to load:', this.src);
        });
    });
}

// Initialize error handling
handleMissingAssets();