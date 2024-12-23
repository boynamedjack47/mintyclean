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


document.addEventListener('DOMContentLoaded', function() {
    const sqftInput = document.getElementById('squareFootage');
    const sqftDisplay = document.getElementById('sqftDisplay');

    // Price elements
    const oneTimePriceElement = document.getElementById('oneTimePrice');
    const twelveMonthPriceElement = document.getElementById('twelveMonthPrice');
    const sixMonthPriceElement = document.getElementById('sixMonthPrice');

    // Pricing tiers (adjust as needed)
    const pricingTiers = [
        { min: 1000, max: 1125, oneTime: 450, twelveMonth: 209, sixMonth: 293 },
        { min: 1126, max: 1375, oneTime: 475, twelveMonth: 214, sixMonth: 300 },
        { min: 1376, max: 1625, oneTime: 500, twelveMonth: 225, sixMonth: 315 },
        { min: 1626, max: 1875, oneTime: 525, twelveMonth: 235, sixMonth: 329 },
        { min: 1876, max: 2125, oneTime: 540, twelveMonth: 273, sixMonth: 382 },
        { min: 2126, max: 2375, oneTime: 550, twelveMonth: 278, sixMonth: 389 },
        { min: 2376, max: 2625, oneTime: 575, twelveMonth: 289, sixMonth: 410 },
        { min: 2626, max: 2875, oneTime: 600, twelveMonth: 300, sixMonth: 425 },
        { min: 2876, max: 3125, oneTime: 625, twelveMonth: 315, sixMonth: 440 },
        { min: 3126, max: 3375, oneTime: 650, twelveMonth: 330, sixMonth: 460 },
        { min: 3376, max: 3625, oneTime: 675, twelveMonth: 345, sixMonth: 475 },
        { min: 3626, max: 3875, oneTime: 700, twelveMonth: 360, sixMonth: 490 },
        { min: 3876, max: 4125, oneTime: 725, twelveMonth: 375, sixMonth: 510 },
        { min: 4126, max: 4375, oneTime: 750, twelveMonth: 390, sixMonth: 525 },
        { min: 4376, max: 4625, oneTime: 775, twelveMonth: 405, sixMonth: 545 },
        { min: 4626, max: 4875, oneTime: 800, twelveMonth: 420, sixMonth: 560 },
        { min: 4876, max: 5000, oneTime: 825, twelveMonth: 435, sixMonth: 580 },
    ];
    

    // Function to determine prices based on square footage
    function getPricesForSqft(sqft) {
        for (const tier of pricingTiers) {
            if (sqft >= tier.min && sqft <= tier.max) {
                return tier;
            }
        }
        // Default to the highest tier if sqft exceeds the defined range
        return pricingTiers[pricingTiers.length - 1];
    }

    // Function to update the displayed prices
    function updatePrices(sqft) {
        const { oneTime, twelveMonth, sixMonth } = getPricesForSqft(sqft);

        oneTimePriceElement.textContent = `$${oneTime}`;
        twelveMonthPriceElement.textContent = `$${twelveMonth}/month`;
        sixMonthPriceElement.textContent = `$${sixMonth}/month`;
    }

    // Event listener for slider input
    sqftInput.addEventListener('input', function() {
        const sqft = parseInt(sqftInput.value, 10);
        sqftDisplay.textContent = `${sqft} sqft`;
        updatePrices(sqft);
    });

    // Initial price calculation
    updatePrices(parseInt(sqftInput.value, 10));
});

