const cartItems = document.getElementById("cartItems");
const cartPanel = document.getElementById("cartPanel");

let cart = {};

function addToCart(item) {
    if (cart[item]) {
        cart[item]++;
    } else {
        cart[item] = 1;
    }

    renderCart();

    cartPanel.classList.add("show");
}

function renderCart() {
    const items = Object.keys(cart);

    if (items.length === 0) {
        cartItems.innerHTML = "No items added yet.";
        return;
    }

    cartItems.innerHTML = items
        .map(item => `
            <div class="cart-item">
                ${item} x${cart[item]}
            </div>
        `)
        .join("");
}