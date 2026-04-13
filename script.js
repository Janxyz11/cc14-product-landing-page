const cartItems = document.getElementById("cartItems");
let cart = [];

function addToCart(item) {
  cart.push(item);
  renderCart();
  toggleCart(); // auto-open cart when adding
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = "No items added yet.";
    return;
  }

  cartItems.innerHTML = cart
    .map(item => `<div class="cart-item">${item}</div>`)
    .join("");
}