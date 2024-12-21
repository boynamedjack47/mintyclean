// about.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the pricing button
    const pricingButton = document.getElementById('pricingButton');
    
    // Check if the button exists on the page
    if (pricingButton) {
        // When the button is clicked, scroll to the pricing section
        pricingButton.addEventListener('click', function() {
            const pricingSection = document.getElementById('pricing');
            
            // Scroll to the pricing section smoothly
            if (pricingSection) {
                pricingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Check if the page URL contains #pricing
    if (window.location.hash === '#pricing') {
        const pricingSection = document.getElementById('pricing');
        
        if (pricingSection) {
            // Smooth scroll to the pricing section when URL has #pricing
            pricingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
