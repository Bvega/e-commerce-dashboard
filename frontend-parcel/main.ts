// Get reference to the output container
const output = document.getElementById("output")!;

/**
 * Renders a product card with basic information and a placeholder image.
 * Includes an inner reviews container for future rendering of reviews.
 */
const renderProductCard = (product: { id: number; name: string; price: number }) => {
  const card = document.createElement("div");
  card.className = "card";

  // HTML structure includes a header section with text and image side-by-side
  card.innerHTML = `
    <div class="product-header">
      <div>
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> $${product.price}</p>
        <div class="reviews" id="reviews-${product.id}">Loading reviews...</div>
      </div>
      <img src="https://via.placeholder.com/100" alt="${product.name}" class="product-image" />
    </div>
  `;

  output.appendChild(card);
};

// Simulated product data for demo purposes
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 200 }
];

// Render each product card
products.forEach(renderProductCard);
