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

function toggleCart() {
    cartPanel.classList.toggle("show");
}


function buyNow() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thanks for buying from Frank's Flower Shop!");

    cart = {};
    renderCart();

    cartPanel.classList.remove("show");
}