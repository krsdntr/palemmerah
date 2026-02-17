// Shopping Cart Logic
class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadFromStorage();
    }

    // Add item to cart
    addItem(item) {
        const existingItem = this.items.find(i => i.name === item.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                name: item.name,
                price: item.price,
                quantity: 1,
                category: item.category
            });
        }

        this.saveToStorage();
        this.render();
    }

    // Remove item from cart
    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
        this.saveToStorage();
        this.render();
    }

    // Update item quantity
    updateQuantity(itemName, change) {
        const item = this.items.find(i => i.name === itemName);

        if (item) {
            item.quantity += change;

            if (item.quantity <= 0) {
                this.removeItem(itemName);
            } else {
                this.saveToStorage();
                this.render();
            }
        }
    }

    // Get total price
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Get total items count
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Save to localStorage
    saveToStorage() {
        localStorage.setItem('palemMerahCart', JSON.stringify(this.items));
    }

    // Load from localStorage
    loadFromStorage() {
        const saved = localStorage.getItem('palemMerahCart');
        if (saved) {
            this.items = JSON.parse(saved);
        }
    }

    // Clear cart
    clear() {
        this.items = [];
        this.saveToStorage();
        this.render();
    }

    // Format price to Rupiah
    formatPrice(price) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    }

    // Render cart UI
    render() {
        const cartBody = document.getElementById('cart-body');
        const cartEmpty = document.getElementById('cart-empty');
        const cartCount = document.getElementById('cart-count');
        const totalPrice = document.getElementById('total-price');
        const cartFooter = document.getElementById('cart-footer');

        // Update cart count badge
        if (cartCount) {
            const count = this.getItemCount();
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }

        // If cart body doesn't exist (not on menu page), just update count and return
        if (!cartBody) {
            return;
        }

        // Update total price
        if (totalPrice) {
            totalPrice.textContent = this.formatPrice(this.getTotal());
        }

        // Show/hide empty state
        if (this.items.length === 0) {
            if (cartEmpty) cartEmpty.style.display = 'flex';
            if (cartFooter) cartFooter.style.display = 'none';

            // Remove existing cart items
            const existingItems = cartBody.querySelectorAll('.cart-item');
            existingItems.forEach(item => item.remove());
            return;
        }

        // Hide empty state and show footer
        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartFooter) cartFooter.style.display = 'block';

        // Clear existing items
        const existingItems = cartBody.querySelectorAll('.cart-item');
        existingItems.forEach(item => item.remove());

        // Render cart items
        this.items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item__info">
                    <div class="cart-item__name">${item.name}</div>
                    <div class="cart-item__price">${this.formatPrice(item.price)}</div>
                    <div class="cart-item__controls">
                        <button class="cart-item__btn" data-action="decrease" data-item="${item.name}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="cart-item__qty">${item.quantity}</span>
                        <button class="cart-item__btn" data-action="increase" data-item="${item.name}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item__remove" data-item="${item.name}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartBody.appendChild(cartItem);
        });

        // Add event listeners to cart item buttons
        const decreaseBtns = cartBody.querySelectorAll('[data-action="decrease"]');
        const increaseBtns = cartBody.querySelectorAll('[data-action="increase"]');
        const removeBtns = cartBody.querySelectorAll('.cart-item__remove');

        decreaseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemName = e.currentTarget.dataset.item;
                this.updateQuantity(itemName, -1);
            });
        });

        increaseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemName = e.currentTarget.dataset.item;
                this.updateQuantity(itemName, 1);
            });
        });

        removeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemName = e.currentTarget.dataset.item;
                this.removeItem(itemName);
            });
        });
    }

    // Generate WhatsApp message
    generateWhatsAppMessage(customerData = {}) {
        if (this.items.length === 0) {
            return '';
        }

        let message = 'Halo Palem Merah. Saya ingin memesan, berikut rinciannya:\n\n';
        message += '*PESANAN PALEM MERAH*\n\n';

        // Add customer details if provided
        if (customerData.name) {
            message += '*DATA PEMESAN:*\n';
            message += `Nama: ${customerData.name}\n`;
            message += `Telepon: ${customerData.phone}\n`;
            message += `Alamat: ${customerData.address}\n`;
            if (customerData.deliveryDate) {
                message += `Tanggal Kirim: ${customerData.deliveryDate}`;
                if (customerData.deliveryTime) {
                    message += ` pukul ${customerData.deliveryTime}`;
                }
                message += '\n';
            }
            if (customerData.notes) {
                message += `Catatan: ${customerData.notes}\n`;
            }
            message += '\n';
        }

        message += '================================\n\n';

        // Group items by category
        const groupedItems = {};
        this.items.forEach(item => {
            if (!groupedItems[item.category]) {
                groupedItems[item.category] = [];
            }
            groupedItems[item.category].push(item);
        });

        // Add items to message
        for (const [category, items] of Object.entries(groupedItems)) {
            message += `*${category.toUpperCase()}*\n`;
            items.forEach(item => {
                const subtotal = item.price * item.quantity;
                message += `- ${item.name}\n`;
                message += `  ${item.quantity} x ${this.formatPrice(item.price)} = ${this.formatPrice(subtotal)}\n`;
            });
            message += '\n';
        }

        message += '================================\n\n';
        message += `*TOTAL: ${this.formatPrice(this.getTotal())}*\n\n`;
        message += '================================\n\n';
        message += 'Mohon konfirmasi pesanan ini.\nTerima kasih!';

        return message;
    }

    // Send WhatsApp message with customer data
    sendWhatsApp(customerData) {
        const message = this.generateWhatsAppMessage(customerData);
        const encodedMessage = encodeURIComponent(message);

        // Use the contact number from merchant info (fixed)
        const phone = '628121904646';
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
    }

    // Checkout via WhatsApp - open modal first
    checkout() {
        if (this.items.length === 0) {
            alert('Keranjang belanja Anda kosong!');
            return;
        }

        // Open checkout modal
        const checkoutModal = document.getElementById('checkout-modal');
        if (checkoutModal) {
            checkoutModal.classList.add('show');
        }
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Export for use in other files
if (typeof window !== 'undefined') {
    window.cart = cart;
}
