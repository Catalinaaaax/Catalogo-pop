document.addEventListener('DOMContentLoaded', function () {
    // --- Slider de Reseñas ---
    const reviewsContainer = document.querySelector('.reviews-slider-container');
    if (reviewsContainer) {
        const slider = reviewsContainer.querySelector('.reviews-slider');
        const slides = reviewsContainer.querySelectorAll('.review-card');
        const prevButton = reviewsContainer.querySelector('.prev-arrow');
        const nextButton = reviewsContainer.querySelector('.next-arrow');

        if (slider && slides.length > 0 && prevButton && nextButton) {
            let currentIndex = 0;
            const totalSlides = slides.length;

            function goToSlide(index) {
                slider.style.transform = 'translateX(' + (-index * 100) + '%)';
            }

            nextButton.addEventListener('click', function () {
                currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
                goToSlide(currentIndex);
            });

            prevButton.addEventListener('click', function () {
                currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
                goToSlide(currentIndex);
            });
        }
    }

    // --- Slider de Productos ---
    const productContainer = document.querySelector('.product-slider-container');
    if (productContainer) {
        const productSlider = productContainer.querySelector('.product-slider');
        const productPrevButton = productContainer.querySelector('.prev-arrow');
        const productNextButton = productContainer.querySelector('.next-arrow');
        
        if (productSlider && productPrevButton && productNextButton) {
            const scrollAmount = 300; // Ancho de tarjeta (270px) + gap (30px)

            productNextButton.addEventListener('click', () => {
                // Desplaza el slider hacia la derecha
                productSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            productPrevButton.addEventListener('click', () => {
                // Desplaza el slider hacia la izquierda
                productSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    }
});