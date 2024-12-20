// JavaScript to handle the hamburger menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger'); // Get the hamburger button
    const navbarLinks = document.querySelector('.navbar ul'); // Get the navbar links

    // Add click event listener to toggle the 'active' class
    hamburger.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});
