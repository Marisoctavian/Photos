function downloadImagesWithAlt() {
    const images = document.querySelectorAll('img'); // Select all images on the page

    images.forEach((img, index) => {
        let imgSrc = img.src; // Get image URL
        let altText = img.alt || `image_${index}`; // Use alt text or fallback name
        let fileName = altText.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg'; // Sanitize filename

        fetch(imgSrc)
            .then(response => response.blob()) // Convert to a Blob
            .then(blob => {
                let link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => console.error('Error downloading image:', error));
    });
}