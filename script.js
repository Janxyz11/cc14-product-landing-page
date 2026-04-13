const cartItems = document.getElementById("cartItems");
const cartPanel = document.getElementById("cartPanel");
const totalPrice = document.getElementById("totalPrice");

let cart = {};

function addToCart(name, price) {
    if (cart[name]) {
        cart[name].quantity++;
    } else {
        cart[name] = {
            price: price,
            quantity: 1
        };
    }

    renderCart();
    cartPanel.classList.add("show");
}

function renderCart() {
    const items = Object.keys(cart);

    if (items.length === 0) {
        cartItems.innerHTML = "No items added yet.";
        totalPrice.textContent = "Total: ₱0";
        return;
    }

    let total = 0;

    cartItems.innerHTML = items.map(item => {
        const subtotal = cart[item].price * cart[item].quantity;
        total += subtotal;

        return `
            <div class="cart-item">
                ${item} x${cart[item].quantity} - ₱${subtotal.toLocaleString()}
            </div>
        `;
    }).join("");

    totalPrice.textContent = `Total: ₱${total.toLocaleString()}`;
}

function toggleCart() {
    cartPanel.classList.toggle("show");
}

function buyNow() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thanks for buying from Franks Flower Shop!");

    cart = {};
    renderCart();
    cartPanel.classList.remove("show");
}