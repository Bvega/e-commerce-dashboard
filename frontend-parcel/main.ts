import "../frontend-parcel/style.css";
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport, Product } from "../src/apiSimulator";
import { retryPromise } from "../src/retryPromise";

// Output container
const output = document.getElementById("output")!;

// Render a single review
const renderReview = (container: HTMLElement, text: string, className = "review") => {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  container.appendChild(div);
};

// Render product card
const renderProductCard = (product: Product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-content">
      <div class="product-details">
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> $${product.price}</p>
        <h3>Reviews:</h3>
        <div class="loading">Fetching reviews...</div>
      </div>
    </div>
  `;

  output.appendChild(card);
  return card.querySelector(".product-details") as HTMLElement;
};

// Render sales report
const renderSalesReport = (report: { totalSales: number; unitsSold: number; averagePrice: number }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>Sales Report</h2>
    <p><strong>Total Sales:</strong> $${report.totalSales}</p>
    <p><strong>Units Sold:</strong> ${report.unitsSold}</p>
    <p><strong>Average Price:</strong> $${report.averagePrice}</p>
  `;
  output.appendChild(card);
};

// Show error block
const renderError = (msg: string) => {
  const div = document.createElement("div");
  div.className = "error";
  div.textContent = `Error: ${msg}`;
  output.appendChild(div);
};

// Footer
const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.textContent = "© 2025 E-Commerce Dashboard Demo";
  document.body.appendChild(footer);
};

// Main async logic
const main = async () => {
  try {
    const loadingDiv = document.getElementById("loading");
    if (loadingDiv) loadingDiv.remove();

    const products = await retryPromise(fetchProductCatalog, 3, 1000);

    for (const product of products) {
      const card = renderProductCard(product);

      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        card.querySelector(".loading")?.remove();

        if (reviews.length === 0) {
          renderReview(card, "No reviews yet.");
        } else {
          reviews.forEach((r) => {
            renderReview(card, `💬 ${r.user}: ${r.comment}`);
          });
        }
      } catch (err) {
        card.querySelector(".loading")?.remove();
        renderReview(card, `⚠️ Failed to load reviews: ${err}`, "error");
      }
    }

    try {
      const report = await retryPromise(fetchSalesReport, 3, 1000);
      renderSalesReport(report);
    } catch (err) {
      renderError(`Failed to load sales report: ${err}`);
    }

    renderFooter();
  } catch (err) {
    const loadingDiv = document.getElementById("loading");
    if (loadingDiv) loadingDiv.remove();
    renderError(`${err}`);
  }
};

main();
