import { fetchProductCatalog } from "./apiSimulator";

const output = document.getElementById("output")!;
output.textContent = "Loading products...";

fetchProductCatalog()
  .then((products) => {
    output.innerHTML = "<h2>Product Catalog</h2>";
    products.forEach((product) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<strong>${product.name}</strong> - $${product.price}`;
      output.appendChild(div);
    });
  })
  .catch((error) => {
    output.innerHTML = `<span style="color:red;">Error: ${error}</span>`;
  });
