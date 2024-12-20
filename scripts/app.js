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
