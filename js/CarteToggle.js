let cartItems = [];

function addToCart(item) {
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.name === item.name
  );

  if (existingItemIndex >= 0) {
    cartItems[existingItemIndex].quantity++;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cartCount");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartCount.textContent = cartItems.length;

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your Cart is Empty</p>";
    document.getElementById("checkoutButton").style.display = "none";
  } else {
    cartItemsContainer.innerHTML = "";
    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
                <img id="image" src="${item.image}" alt="${item.name}" />
                <span id="product-name">${item.name} (x${item.quantity})</span>
                <span class="remove-button" onclick="removeFromCart(${index})">Remove</span>
            `;

      cartItemsContainer.appendChild(cartItem);
    });
    document.getElementById("checkoutButton").style.display = "block";
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function removeFromCart(index) {
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
  } else {
    cartItems.splice(index, 1);
  }
  updateCart();
}

document.getElementById("cartToggle").addEventListener("click", function () {
  const dropdown = document.getElementById("cartDropdown");
  dropdown.classList.toggle("active");
});
