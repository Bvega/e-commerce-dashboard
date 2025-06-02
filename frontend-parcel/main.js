"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./apiSimulator");
const retryPromise_1 = require("../src/retryPromise");
const output = document.getElementById("output");
const loading = document.getElementById("loading");
const renderReview = (container, review, className = "review") => {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = review;
    container.appendChild(div);
};
const renderProductCard = (product) => {
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
    return card.querySelector(".product-details");
};
const renderSalesReport = (report) => {
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
const renderError = (message) => {
    const div = document.createElement("div");
    div.className = "error";
    div.textContent = message;
    output.appendChild(div);
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, retryPromise_1.retryPromise)(() => (0, apiSimulator_1.fetchProductCatalog)(), 3, 1000);
        for (const product of products) {
            const productCard = renderProductCard(product);
            try {
                const reviews = yield (0, retryPromise_1.retryPromise)(() => (0, apiSimulator_1.fetchProductReviews)(product.id), 3, 1000);
                if (reviews.length === 0) {
                    renderReview(productCard, "No reviews yet.");
                }
                else {
                    reviews.forEach((review) => {
                        renderReview(productCard, `💬 ${review.user}: ${review.comment}`);
                    });
                }
            }
            catch (err) {
                renderReview(productCard, `⚠️ Error loading reviews: ${err}`, "error");
            }
        }
        try {
            const report = yield (0, retryPromise_1.retryPromise)(() => (0, apiSimulator_1.fetchSalesReport)(), 3, 1000);
            renderSalesReport(report);
        }
        catch (err) {
            renderError(`Error fetching sales report: ${err}`);
        }
    }
    catch (err) {
        renderError(`Fatal Error: ${err}`);
    }
    finally {
        loading.remove();
    }
});
main();
