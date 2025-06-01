import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "../src/apiSimulator";

// 1. Reference the HTML element where we will inject our UI
const output = document.getElementById("output")!;

// 2. A function to create a card per product
const renderProductCard = (product: { id: number; name: string; price: number }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${product.name}</h2>
    <p><strong>Price:</strong> $${product.price}</p>
    <div class="reviews" id="reviews-${product.id}">Loading reviews...</div>
  `;
  output.appendChild(card);
};

// 3. A function to update the product card with fetched reviews
const appendReviews = (productId: number, reviews: { user: string; comment: string }[]) => {
  const reviewsDiv = document.getElementById(`reviews-${productId}`)!;
  reviewsDiv.innerHTML = "<h3>Reviews:</h3>";
  reviews.forEach((review) => {
    const p = document.createElement("p");
    p.className = "review";
    p.textContent = `💬 ${review.user}: ${review.comment}`;
    reviewsDiv.appendChild(p);
  });
};

// 4. Main app function: fetch products and their reviews
const main = async () => {
  try {
    const products = await fetchProductCatalog();
    products.forEach(async (product) => {
      renderProductCard(product);
      try {
        const reviews = await fetchProductReviews(product.id);
        appendReviews(product.id, reviews);
      } catch (error) {
        const reviewsDiv = document.getElementById(`reviews-${product.id}`)!;
        reviewsDiv.innerHTML = `<p class="error">⚠️ Error loading reviews: ${error}</p>`;
      }
    });
  } catch (error) {
    output.innerHTML = `<p class="error">Fatal Error: ${error}</p>`;
  }
};

main();
