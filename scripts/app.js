document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });
});
// app.js

// Detect when the page is scrolled
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Add class to navbar when scrolled past 100px
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const pricingButton = document.getElementById('see-pricing');
    const pricingSection = document.getElementById('pricing');

    if (pricingButton && pricingSection) {
        pricingButton.addEventListener('click', () => {
            pricingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    } else {
        console.error('Pricing button or section not found');
    }
});

/* Scroll to top */
// JavaScript for "Return to Top" button

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const returnToTopBtn = document.getElementById('returnToTop');

    // Show the button when the user scrolls down 300px or more
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            returnToTopBtn.classList.add('show');
        } else {
            returnToTopBtn.classList.remove('show');
        }
    });

    // Scroll smoothly to the top when the button is clicked
    returnToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



