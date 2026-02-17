// Menu Page Logic
document.addEventListener('DOMContentLoaded', function () {
    // Initialize
    renderAllMenus();
    setupCategoryFilters();
    setupCartUI();

    // Render cart on page load
    if (window.cart) {
        window.cart.render();
    }
});

// Render all menu categories
function renderAllMenus() {
    const container = document.getElementById('menu-items-container');
    if (!container) return;

    container.innerHTML = '';

    for (const [categoryKey, categoryData] of Object.entries(menuData.menus)) {
        const categorySection = createCategorySection(categoryKey, categoryData);
        container.appendChild(categorySection);
    }
}

// Create category section
function createCategorySection(categoryKey, categoryData) {
    const section = document.createElement('div');
    section.className = 'menu-category';
    section.dataset.category = categoryKey;

    const title = document.createElement('h2');
    title.className = 'menu-category__title';
    title.textContent = categoryData.title;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'menu-category__grid';

    categoryData.items.forEach(item => {
        const menuItem = createMenuItem(item, categoryData.title, categoryKey);
        grid.appendChild(menuItem);
    });

    section.appendChild(grid);
    return section;
}

// Create menu item card
function createMenuItem(item, categoryTitle, categoryKey) {
    const card = document.createElement('div');
    card.className = 'menu-item';

    const header = document.createElement('div');
    header.className = 'menu-item__header';

    const name = document.createElement('h3');
    name.className = 'menu-item__name';
    name.textContent = item.item;
    header.appendChild(name);

    if (item.description) {
        const description = document.createElement('p');
        description.className = 'menu-item__description';
        description.textContent = item.description;
        header.appendChild(description);
    }

    if (item.box_size) {
        const boxSize = document.createElement('p');
        boxSize.className = 'menu-item__description';
        boxSize.textContent = `Box: ${item.box_size}`;
        boxSize.style.fontWeight = '500';
        boxSize.style.color = 'var(--primary-color)';
        header.appendChild(boxSize);
    }

    card.appendChild(header);

    const footer = document.createElement('div');
    footer.className = 'menu-item__footer';

    const price = document.createElement('div');
    price.className = 'menu-item__price';
    price.textContent = formatPrice(item.price);
    footer.appendChild(price);

    const addBtn = document.createElement('button');
    addBtn.className = 'menu-item__add-btn';
    addBtn.innerHTML = '<i class="fas fa-plus"></i> Tambah';
    addBtn.addEventListener('click', () => {
        addToCart({
            name: item.item,
            price: item.price,
            category: categoryTitle
        });

        // Visual feedback
        addBtn.innerHTML = '<i class="fas fa-check"></i> Ditambah';
        addBtn.style.background = 'var(--secondary-color)';

        setTimeout(() => {
            addBtn.innerHTML = '<i class="fas fa-plus"></i> Tambah';
            addBtn.style.background = '';
        }, 1000);
    });
    footer.appendChild(addBtn);

    card.appendChild(footer);
    return card;
}

// Format price to Rupiah
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Add to cart
function addToCart(item) {
    if (window.cart) {
        window.cart.addItem(item);

        // Show cart sidebar briefly or animate cart button
        const cartButton = document.getElementById('cart-button');
        if (cartButton) {
            cartButton.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartButton.style.transform = '';
            }, 300);
        }
    }
}

// Setup category filters
function setupCategoryFilters() {
    const filterBtns = document.querySelectorAll('.category-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get category to filter
            const category = this.dataset.category;

            // Filter menu categories
            filterMenuCategories(category);
        });
    });
}

// Filter menu categories
function filterMenuCategories(category) {
    const categories = document.querySelectorAll('.menu-category');

    categories.forEach(cat => {
        if (category === 'all') {
            cat.style.display = 'block';
        } else {
            if (cat.dataset.category === category) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        }
    });

    // Smooth scroll to top of menu section
    const menuSection = document.querySelector('.menu-section');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Setup cart UI
function setupCartUI() {
    const cartButton = document.getElementById('cart-button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.getElementById('btn-checkout');

    // Open cart
    if (cartButton) {
        cartButton.addEventListener('click', () => {
            openCart();
        });
    }

    // Close cart
    if (cartClose) {
        cartClose.addEventListener('click', () => {
            closeCart();
        });
    }

    // Close cart on overlay click
    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => {
            closeCart();
        });
    }

    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (window.cart) {
                window.cart.checkout();
            }
        });
    }

    // Close cart with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeCheckoutModal();
        }
    });

    // Setup checkout modal
    setupCheckoutModal();
}

// Setup checkout modal controls
function setupCheckoutModal() {
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutModalClose = document.getElementById('checkout-modal-close');
    const checkoutForm = document.getElementById('checkout-form');

    // Close modal
    if (checkoutModalClose) {
        checkoutModalClose.addEventListener('click', () => {
            closeCheckoutModal();
        });
    }

    // Close modal on background click
    if (checkoutModal) {
        checkoutModal.addEventListener('click', (e) => {
            if (e.target === checkoutModal) {
                closeCheckoutModal();
            }
        });
    }

    // Form submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(checkoutForm);
            const customerData = {
                name: formData.get('customerName'),
                phone: formData.get('customerPhone'),
                address: formData.get('customerAddress'),
                deliveryDate: formData.get('deliveryDate'),
                deliveryTime: formData.get('deliveryTime'),
                notes: formData.get('notes')
            };

            // Send to WhatsApp
            if (window.cart) {
                window.cart.sendWhatsApp(customerData);

                // Close modal and cart
                closeCheckoutModal();
                closeCart();

                // Reset form
                checkoutForm.reset();

                // Optional: Clear cart after successful order
                // window.cart.clear();
            }
        });
    }

    // Set minimum date to today
    const deliveryDateInput = document.getElementById('delivery-date');
    if (deliveryDateInput) {
        const today = new Date().toISOString().split('T')[0];
        deliveryDateInput.setAttribute('min', today);
    }
}

// Close checkout modal
function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
        checkoutModal.classList.remove('show');
    }
}

// Open cart sidebar
function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    if (cartSidebar) {
        cartSidebar.classList.add('show');
    }
    if (cartOverlay) {
        cartOverlay.classList.add('show');
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close cart sidebar
function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    if (cartSidebar) {
        cartSidebar.classList.remove('show');
    }
    if (cartOverlay) {
        cartOverlay.classList.remove('show');
    }

    // Restore body scroll
    document.body.style.overflow = '';
}
