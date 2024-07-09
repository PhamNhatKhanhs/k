
document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const cartIcon = document.querySelector('.fa-shopping-cart');
    const cartElement = document.getElementById('cart');

    cartIcon.addEventListener('click', function(event) {
        event.preventDefault();
        cartElement.classList.toggle('show');
    });

    document.querySelectorAll('.fa-shopping-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const product = this.closest('.slide');
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('.new-price').innerText;

            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    clearCartButton.addEventListener('click', function() {
        cart.length = 0;
        updateCart();
    });

    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - ${item.price} <button class="remove-item" data-index="${index}">Xóa</button>`;
            cartItems.appendChild(li);
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cart.splice(index, 1);
                updateCart();
            });
        });
    }
});

/*check out*/
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');

    function updateTotalPrice() {
        let total = 0;
        const items = cartItems.querySelectorAll('li');
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            total += price;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Example function to add item to cart
    function addItemToCart(name, price) {
        const li = document.createElement('li');
        li.innerHTML = `${name} - $<span class="item-price">${price.toFixed(2)}</span>`;
        cartItems.appendChild(li);
        updateTotalPrice();
    }

    // Example usage
    addItemToCart('Compass', 15.00);
    addItemToCart('Tent', 15.00);

    checkoutButton.addEventListener('click', function() {
        alert('Proceeding to checkout with total: $' + totalPriceElement.textContent);
        // Add your checkout logic here
    });
});

