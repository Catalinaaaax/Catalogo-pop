document.addEventListener('DOMContentLoaded', () => {
    const categoryFilters = document.getElementById('category-filter-list');
    const colorFilters = document.getElementById('color-filter-list');
    const productGrid = document.getElementById('product-grid');
    const products = productGrid.querySelectorAll('.catalog-product-card');

    let activeFilters = {
        category: 'all',
        color: 'all'
    };

    function applyFilters() {
        products.forEach(product => {
            const categoryMatch = activeFilters.category === 'all' || product.dataset.category === activeFilters.category;
            const colorMatch = activeFilters.color === 'all' || product.dataset.color === activeFilters.color;

            if (categoryMatch && colorMatch) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    }

    function handleFilterClick(event, filterType) {
        const clickedButton = event.target.closest('.filter-button');
        if (!clickedButton) return;

        // Actualiza el filtro activo
        activeFilters[filterType] = clickedButton.dataset.filter;

        // Actualiza el estado visual de los botones
        const filterList = clickedButton.parentElement.parentElement;
        filterList.querySelectorAll('.filter-button').forEach(button => {
            button.classList.remove('active');
        });
        clickedButton.classList.add('active');

        // Aplica los filtros a los productos
        applyFilters();
    }

    // Añade los event listeners a los contenedores de los filtros
    categoryFilters.addEventListener('click', (e) => handleFilterClick(e, 'category'));
    colorFilters.addEventListener('click', (e) => handleFilterClick(e, 'color'));

});