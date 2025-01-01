const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get("product");

const products = {
  ToshibaB77: {
    name: "Toshiba B77",
    price: "$1299",
    originalPrice: "$1399",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",
    description: "High-performance gaming laptop with powerful graphics.",
  },
  HPNotebook: {
    name: "HP Notebook",
    price: "$999",
    originalPrice: "$1099",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
    description: "Lightweight and portable laptop for everyday use.",
  },
  HPEnvy: {
    name: "HP Envy",
    price: "$1099",
    originalPrice: "$1199",
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
    description: "Stylish laptop with powerful performance and sleek design.",
  },
};

const productDetail = products[product];

if (productDetail) {
  document.getElementById("product-detail").innerHTML = `
                <img src="${productDetail.image}" class="card-img-top" alt="${productDetail.name}" />
                <div class="card-body">
                    <h5 class="card-title">${productDetail.name}</h5>
                    <p class="card-text">${productDetail.description}</p>
                    <p class="text-danger"><s>${productDetail.originalPrice}</s></p>
                    <h5 class="text-dark">${productDetail.price}</h5>
                    <a href="Product.html" class="btn btn-secondary">Back to Products</a>
                </div>
            `;
} else {
  document.getElementById("product-detail").innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Product Not Found</h5>
                    <p class="card-text">The product you are looking for does not exist.</p>
                    <a href="index.html" class="btn btn-secondary">Back to Products</a>
                </div>
            `;
}
