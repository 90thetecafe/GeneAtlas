// GeneAtlas Main JavaScript
console.log('%cGeneAtlas 🧬 v1.0.0 initialized successfully', 'color:#22d3ee; font-family:monospace; font-size:14px;');

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').length > 1) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Tailwind script already loaded via CDN in index.html
// Add any interactive features here in the future (DNA animations, modals, etc.)

// Keyboard shortcut: Press '/' to focus search (future feature)
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        console.log('🔍 Quick search activated (feature coming soon)');
        // Future: Open search modal
    }
});

// Make cards more interactive
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 50}ms`;
    });
});

console.log('%cReady for DNA intelligence features...', 'color:#67e8f9; font-size:13px;');
