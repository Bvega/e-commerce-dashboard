import { fetchProductCatalog, fetchProductReviews, fetchSalesReport, Product } from "./apiSimulator";
import { retryPromise } from "../src/retryPromise";

const output = document.getElementById("output")!;
const loading = document.getElementById("loading")!;

const renderReview = (container: HTMLElement, review: string, className = "review") => {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = review;
  container.appendChild(div);
};

const renderProductCard = (product: Product): HTMLElement => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="product-details">
      <h2>${product.name}</h2>
      <p><strong>Price:</strong> $${product.price}</p>
      <h3>Reviews:</h3>
    </div>
  `;

  output.appendChild(card);
  return card.querySelector(".product-details")!;
};

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

const renderError = (message: string) => {
  const div = document.createElement("div");
  div.className = "error";
  div.textContent = message;
  output.appendChild(div);
};

const main = async () => {
  try {
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);

    for (const product of products) {
      const productCard = renderProductCard(product);
      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        if (reviews.length === 0) {
          renderReview(productCard, "No reviews yet.");
        } else {
          reviews.forEach((review) => {
            renderReview(productCard, `💬 ${review.user}: ${review.comment}`);
          });
        }
      } catch (err) {
        renderReview(productCard, `⚠️ Error loading reviews: ${err}`, "error");
      }
    }

    try {
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      renderSalesReport(report);
    } catch (err) {
      renderError(`Error fetching sales report: ${err}`);
    }
  } catch (err) {
    renderError(`Fatal Error: ${err}`);
  } finally {
    loading.remove();
  }
};

main();
