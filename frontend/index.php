<?php
require_once 'config.php';

try {
    $projects = $pdo->query('SELECT * FROM projects ORDER BY created_at DESC')->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    error_log('Database error: ' . $e->getMessage());
    $projects = [];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Truyen's Portfolio - Web Developer specializing in PHP, JavaScript, and modern web technologies">
    <meta name="keywords" content="web developer, PHP, JavaScript, Node.js, portfolio">
    <title>Truyen's Portfolio - Web Developer</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            400: '#8b5cf6',
                            500: '#7c3aed',
                            600: '#6d28d9'
                        },
                        surface: {
                            50: '#fafafa',
                            100: '#f4f4f5',
                            800: '#27272a',
                            900: '#18181b'
                        }
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.6s ease-out forwards',
                        'slide-up': 'slideUp 0.6s ease-out forwards'
                    }
                }
            }
        }
    </script>
    
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Smooth scroll behavior */
        html {
            scroll-behavior: smooth;
        }
        
        /* Custom focus styles */
        .focus-ring:focus {
            outline: 2px solid #7c3aed;
            outline-offset: 2px;
        }
    </style>
</head>

<body class="bg-white dark:bg-surface-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
    </a>

    <!-- Navigation -->
    <nav class="bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40" role="navigation" aria-label="Main navigation">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <h1 class="text-xl font-bold text-primary-500">Truyen's Portfolio</h1>
                </div>
                
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#projects" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-ring">
                            Projects
                        </a>
                        <a href="#about" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-ring">
                            About
                        </a>
                        <a href="#contact" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-ring">
                            Contact
                        </a>
                    </div>
                </div>
                
                <div class="flex items-center space-x-4">
                    <button 
                        id="theme-toggle" 
                        class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus-ring"
                        aria-label="Toggle dark mode"
                    >
                        <span class="dark:hidden">🌙</span>
                        <span class="hidden dark:inline">☀️</span>
                    </button>
                    
                    <!-- Mobile menu button -->
                    <button 
                        id="mobile-menu-button" 
                        class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-ring"
                        aria-label="Toggle mobile menu"
                        aria-expanded="false"
                    >
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden bg-white dark:bg-surface-900 border-t border-gray-200 dark:border-gray-700">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="#projects" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Projects
                </a>
                <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    About
                </a>
                <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Contact
                </a>
            </div>
        </div>
    </nav>

    <main id="main-content">
        <!-- Hero Section -->
        <section class="py-20 px-4 text-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-surface-900 dark:to-purple-900/20" aria-labelledby="hero-title">
            <div class="max-w-4xl mx-auto">
                <h2 id="hero-title" class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                    Welcome to My Portfolio
                </h2>
                <p class="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300 animate-slide-up" style="animation-delay: 0.2s;">
                    Passionate web developer creating beautiful, performant, and user-friendly digital experiences with modern technologies.
                </p>
                <a 
                    href="#projects" 
                    class="inline-flex items-center px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-ring animate-slide-up"
                    style="animation-delay: 0.4s;"
                >
                    View My Work
                    <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20 px-4" aria-labelledby="projects-title">
            <div class="max-w-7xl mx-auto">
                <h2 id="projects-title" class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white animate-on-scroll">
                    Featured Projects
                </h2>
                
                <?php if (empty($projects)): ?>
                    <div class="text-center py-12">
                        <p class="text-gray-600 dark:text-gray-400">No projects available at the moment.</p>
                    </div>
                <?php else: ?>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <?php foreach ($projects as $index => $project): ?>
                            <article class="animate-on-scroll bg-white dark:bg-surface-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700" style="animation-delay: <?= $index * 0.1 ?>s;">
                                <div class="aspect-video overflow-hidden">
                                    <img 
                                        src="<?= htmlspecialchars($project['image_url']) ?>" 
                                        alt="Screenshot of <?= htmlspecialchars($project['title']) ?>" 
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    >
                                </div>
                                <div class="p-6">
                                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                        <?= htmlspecialchars($project['title']) ?>
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                                        <?= htmlspecialchars($project['description']) ?>
                                    </p>
                                    <div class="flex flex-wrap gap-3">
                                        <?php if (!empty($project['live_url'])): ?>
                                            <a 
                                                href="<?= htmlspecialchars($project['live_url']) ?>" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                class="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-md transition-colors focus-ring"
                                                aria-label="View live demo of <?= htmlspecialchars($project['title']) ?>"
                                            >
                                                Live Demo
                                                <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        <?php endif; ?>
                                        <?php if (!empty($project['repo_url'])): ?>
                                            <a 
                                                href="<?= htmlspecialchars($project['repo_url']) ?>" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 text-sm font-medium rounded-md transition-colors focus-ring"
                                                aria-label="View source code of <?= htmlspecialchars($project['title']) ?>"
                                            >
                                                Source Code
                                                <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </article>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 px-4 bg-gray-50 dark:bg-surface-800/50" aria-labelledby="about-title">
            <div class="max-w-4xl mx-auto text-center">
                <h2 id="about-title" class="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white animate-on-scroll">
                    About Me
                </h2>
                <p class="text-lg mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-on-scroll">
                    I'm a passionate web developer with expertise in creating modern, scalable web applications. 
                    I love turning complex problems into simple, beautiful, and intuitive solutions.
                </p>
                
                <div class="animate-on-scroll">
                    <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Technologies I work with</h3>
                    <div class="flex flex-wrap justify-center gap-4">
                        <?php 
                        $skills = ['PHP', 'JavaScript', 'Node.js', 'MySQL', 'Nginx', 'React', 'Tailwind CSS'];
                        foreach ($skills as $skill): 
                        ?>
                            <span class="px-4 py-2 bg-white dark:bg-surface-800 text-gray-900 dark:text-gray-100 rounded-full font-medium shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <?= $skill ?>
                            </span>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 px-4" aria-labelledby="contact-title">
            <div class="max-w-2xl mx-auto">
                <h2 id="contact-title" class="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white animate-on-scroll">
                    Get In Touch
                </h2>
                <p class="text-center text-gray-600 dark:text-gray-300 mb-12 animate-on-scroll">
                    Have a project in mind? I'd love to hear from you.
                </p>
                
                <form class="animate-on-scroll bg-white dark:bg-surface-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700" aria-label="Contact form">
                    <div class="mb-6">
                        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name *
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="Your full name"
                        >
                    </div>
                    
                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="your.email@example.com"
                        >
                    </div>
                    
                    <div class="mb-8">
                        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Message *
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="6" 
                            required
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        class="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus-ring"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="py-8 px-4 bg-gray-900 dark:bg-black text-center" role="contentinfo">
        <p class="text-gray-400">
            &copy; <?= date('Y') ?> Truyen's Portfolio. Built with PHP and Tailwind CSS.
        </p>
    </footer>

    <script>
        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme') || 
                          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        html.classList.toggle('dark', savedTheme === 'dark');
        
        themeToggle.addEventListener('click', () => {
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', isOpen);
            mobileMenuButton.setAttribute('aria-expanded', !isOpen);
        });

        // Close mobile menu when clicking on navigation links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Form submission handling (basic client-side validation)
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I\'ll get back to you soon.');
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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
    </script>
</body>
</html>