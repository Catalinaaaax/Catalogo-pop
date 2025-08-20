document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos necesarios
    const productCards = document.querySelectorAll('.catalog-product-card');
    const modalOverlay = document.getElementById('product-modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    
    // Si no existe el modal en la página, no hacer nada.
    if (!modalOverlay) return;

    // Placeholders del modal
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');

    // Función para abrir el modal
    function openModal(card) {
        // Obtener la información de la tarjeta clickeada
        const imageSrc = card.querySelector('img').src;
        const title = card.querySelector('h4').textContent;
        const price = card.querySelector('.price').textContent;
        const description = card.dataset.description || "No hay descripción disponible para este producto.";

        // Poblar el modal con la información
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        modalDescription.textContent = description;

        // Mostrar el modal
        modalOverlay.classList.add('visible');
    }

    // Función para cerrar el modal
    function closeModal() {
        modalOverlay.classList.remove('visible');
    }

    // Añadir event listener a cada tarjeta de producto
    productCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    // Añadir event listeners para cerrar el modal
    closeModalButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => event.target === modalOverlay && closeModal());
});