document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos que tienen el atributo 'data-animate'
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento está en la pantalla (intersecting)
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación CSS
                entry.target.classList.add('visible');
                // Una vez animado, deja de observar ese elemento para mejorar el rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // La animación se dispara cuando al menos el 10% del elemento es visible
    });

    // Pone a cada elemento animable bajo la observación del Intersection Observer
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});