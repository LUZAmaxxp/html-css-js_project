const cartItems = JSON.parse(localStorage.getItem("cartItems"));

const cartItemsContainer = document.getElementById("cartItemsContainer");

if (cartItems && cartItems.length > 0) {
  cartItems.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const description = document.createElement("div");
    description.innerHTML = `<strong>${item.name}</strong><br>Quantity: ${item.quantity}`;

    cartItemDiv.appendChild(img);
    cartItemDiv.appendChild(description);

    cartItemsContainer.appendChild(cartItemDiv);
  });
} else {
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
}
