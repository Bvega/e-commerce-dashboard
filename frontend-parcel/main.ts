import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "../src/apiSimulator";

// Output container for UI
const output = document.getElementById("output")!;

/**
 * Create and display a product card
 */
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

/**
 * Append fetched reviews into a product card
 */
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

/**
 * Show a summarized sales report at the bottom
 */
const renderSalesReport = (report: { totalSales: number; unitsSold: number; averagePrice: number }) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h2>Sales Report</h2>
    <p><strong>Total Sales:</strong> $${report.totalSales}</p>
    <p><strong>Units Sold:</strong> ${report.unitsSold}</p>
    <p><strong>Average Price:</strong> $${report.averagePrice}</p>
  `;
  output.appendChild(div);
};

// Main application logic
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

    try {
      const report = await fetchSalesReport();
      renderSalesReport(report);
    } catch (error) {
      const errDiv = document.createElement("div");
      errDiv.className = "error";
      errDiv.textContent = `⚠️ Error loading sales report: ${error}`;
      output.appendChild(errDiv);
    }

  } catch (error) {
    output.innerHTML = `<p class="error">Fatal Error: ${error}</p>`;
  }
};

main();
