document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.show-image');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const imageContainer = button.nextElementSibling;
            const isVisible = imageContainer.style.display === 'block';
            // Hide all images
            document.querySelectorAll('.image-container').forEach(container => {
                container.style.display = 'none';
            });

            // Toggle the current image
            imageContainer.style.display = isVisible ? 'none' : 'block';
        });
    });
});
