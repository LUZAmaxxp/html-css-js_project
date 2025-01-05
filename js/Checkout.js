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

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm Order";
    confirmButton.style.cssText = `  
      margin-left: auto;
      margin-right: 20px;
      background: linear-gradient(45deg, #fe723f, rgb(218, 138, 68));
      color: #fff;
      border: none;
      border-radius: 8px;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      padding: 10px 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1);
      
      `;

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
  const productKey = item.name.replace(/\s+/g, "");
  const product = products[productKey];

  let price = item.quantity * product.price;
  const modal = document.getElementById("orderModal");
  const modalProductInfo = document.getElementById("modalProductInfo");
  modalProductInfo.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="max-width: 100%; border-radius: 8px;" />
        <h3>${item.name}</h3>
        <p>Price: $${price}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Description: ${product.description}</p>
    `;
  modal.style.display = "block";
}

function closeOrderModal() {
  document.getElementById("orderModal").style.display = "none";
}

function cancelOrderByproduct() {
  document.getElementById("cancelConfirmationModal").style.display = "block";
}

function confirmCancel() {
  closeCancelModal();
  closeOrderModal();
}

function closeCancelModal() {
  document.getElementById("cancelConfirmationModal").style.display = "none";
}

function confirmOrderByproduct() {
  document.getElementById("orderSuccessModal").style.display = "block";
}

function closeSuccessModal() {
  document.getElementById("orderSuccessModal").style.display = "none";
  closeOrderModal();
}


