// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle category scrolling
    const categoryContainer = document.querySelector('.categories-scroll');
    if (categoryContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        categoryContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - categoryContainer.offsetLeft;
            scrollLeft = categoryContainer.scrollLeft;
        });

        categoryContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        categoryContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        categoryContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - categoryContainer.offsetLeft;
            const walk = (x - startX) * 2;
            categoryContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // Handle mobile menu toggle
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Handle search bar expansion
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('click', () => {
            searchBar.classList.add('expanded');
        });

        // Close expanded search when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchBar.contains(e.target)) {
                searchBar.classList.remove('expanded');
            }
        });
    }

    // Handle favorite button clicks
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            button.classList.toggle('active');
            const icon = button.querySelector('i');
            if (icon) {
                icon.classList.toggle('fas');
                icon.classList.toggle('far');
                icon.classList.toggle('text-red-500');
            }
        });
    });

    // Handle filter button click
    const filterButton = document.querySelector('.filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', () => {
            // Add filter modal functionality here
            console.log('Filter button clicked');
        });
    }

    // Add smooth scrolling for category navigation
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle image loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }
});
