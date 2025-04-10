
// JavaScript to make all images open in a new tab
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            // Check if the image has a source (src) and is valid
            if (img.src) {
                // Open the image in a new tab
                window.open(img.src, '_blank');
            }
        });
    });
});