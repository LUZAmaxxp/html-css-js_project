const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const cartItemsContainer = document.getElementById("cartItemsContainer");

const products = {
  ToshibaB77: {
    name: "Toshiba B77",
    price: 1299,
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",
    description: "High-performance gaming laptop with powerful graphics.",
  },
  HPNotebook: {
    name: "HP Notebook",
    price: 999,
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
    description: "Lightweight and portable laptop for everyday use.",
  },
  HPEnvy: {
    name: "HP Envy",
    price: 1099,
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
    description: "Stylish laptop with powerful performance and sleek design.",
  },
};

if (cartItems && cartItems.length > 0) {
  cartItems.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const description = document.createElement("div");
    description.innerHTML = `<strong>${item.name}</strong><br>Quantity: ${item.quantity}`;

    const productKey = item.name.replace(/\s+/g, "");
    const product = products[productKey];
    const price = item.quantity;

    if (product) {
      let totalprice = product.price * price;
      description.innerHTML += `<br>Total Price: $${totalprice}`;
      description.innerHTML += `<br>Description: ${product.description}`;
    }

    // Add a button to confirm the order
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm Order";
    confirmButton.onclick = () => showOrderModal(item);

    cartItemDiv.appendChild(img);
    cartItemDiv.appendChild(description);
    cartItemDiv.appendChild(confirmButton);
    cartItemsContainer.appendChild(cartItemDiv);
  });
} else {
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
}

function showOrderModal(item) {
  const modal = document.getElementById("orderModal");
  const modalProductInfo = document.getElementById("modalProductInfo");
  modalProductInfo.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="max-width: 100%; border-radius: 8px;" />
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Description: ${item.description}</p>
    `;
  modal.style.display = "block";
}

function closeOrderModal() {
  document.getElementById("orderModal").style.display = "none"; // Hide the order modal
}

function confirmOrder() {
  // Logic to finalize the order can be added here
  alert("Order confirmed! Thank you for your purchase.");
  closeOrderModal(); // Close the modal after confirming
}
