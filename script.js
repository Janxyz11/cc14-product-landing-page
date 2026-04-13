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