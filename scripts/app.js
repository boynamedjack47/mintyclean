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
        { min: 2376, max: 2625, oneTime: 550, twelveMonth: 284, sixMonth: 398 },
        { min: 2626, max: 2875, oneTime: 555, twelveMonth: 289, sixMonth: 305 },
        { min: 2876, max: 3125, oneTime: 565, twelveMonth: 294, sixMonth: 412 },
        { min: 3126, max: 3375, oneTime: 575, twelveMonth: 299, sixMonth: 419 },
        { min: 3376, max: 3625, oneTime: 585, twelveMonth: 305, sixMonth: 427 },
        { min: 3626, max: 3875, oneTime: 595, twelveMonth: 310, sixMonth: 434 },
        { min: 3876, max: 4125, oneTime: 605, twelveMonth: 315, sixMonth: 441 },
        { min: 4126, max: 4425, oneTime: 615, twelveMonth: 320, sixMonth: 448 },
        { min: 4426, max: 4625, oneTime: 625, twelveMonth: 326, sixMonth: 456 },
        { min: 4626, max: 4875, oneTime: 635, twelveMonth: 335, sixMonth: 469 },
        { min: 4876, max: 5125, oneTime: 645, twelveMonth: 341, sixMonth: 477 },
        { min: 5126, max: 5375, oneTime: 655, twelveMonth: 347, sixMonth: 486 },
        { min: 5376, max: 5625, oneTime: 665, twelveMonth: 347, sixMonth: 486 },
        { min: 5626, max: 5875, oneTime: 675, twelveMonth: 359, sixMonth: 503 },
        { min: 5876, max: 6125, oneTime: 700, twelveMonth: 498, sixMonth: 697 },
        { min: 6126, max: 6375, oneTime: 710, twelveMonth: 510, sixMonth: 714 },
        { min: 6376, max: 6625, oneTime: 720, twelveMonth: 516, sixMonth: 722 },
        { min: 6626, max: 6874, oneTime: 730, twelveMonth: 522, sixMonth: 731 },
        { min: 6875, max: 7125, oneTime: 800, twelveMonth: 528, sixMonth: 739 },
        { min: 7126, max: 7374, oneTime: 810, twelveMonth: 534, sixMonth: 758 },
        { min: 7375, max: 7624, oneTime: 820, twelveMonth: 540, sixMonth: 756 },
        { min: 7625, max: 7774, oneTime: 830, twelveMonth: 546, sixMonth: 764 },
        { min: 7775, max: 8000, oneTime: 840, twelveMonth: 558, sixMonth: 781 },
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

