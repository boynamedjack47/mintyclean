// services.js
document.addEventListener('DOMContentLoaded', function () {
    const pricingButton = document.getElementById('seePricingBtn');
    if (pricingButton) {
        pricingButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of jumping

            // Scroll to the pricing section in about.html
            const targetSection = document.getElementById('pricing');

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start', // Align the section at the top of the viewport
                });

                // Optionally, change the hash in the URL (this does not cause a jump)
                window.location.hash = '#pricing';
            }
        });
    } else {
        console.log('Pricing button not found');
    }
});
