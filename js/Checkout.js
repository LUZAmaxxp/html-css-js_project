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
    const price = parseInt(item.quantity);

    if (product) {
      let totalprice = product.price * price;
      description.innerHTML += `<br>Total Price: ${totalprice}`;
      description.innerHTML += `<br>Description: ${product.description}`;
    }

    cartItemDiv.appendChild(img);
    cartItemDiv.appendChild(description);
    cartItemsContainer.appendChild(cartItemDiv);
  });
} else {
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
}
