// src/index.ts
import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator";
import { retryPromise } from "./retryPromise";
import { NetworkError, DataError } from "./customErrors";

// ✅ Helper to log results or errors
const log = (label: string, data: any) => {
  console.log(`✅ ${label}:`, data);
};

// ✅ Helper to log errors
const logError = (label: string, error: any) => {
  if (error instanceof NetworkError) {
    console.error(`🌐 Network error ${label}:`, error.message);
  } else if (error instanceof DataError) {
    console.error(`📊 Data error ${label}:`, error.message);
  } else {
    console.error(`❌ Unknown error ${label}:`, error);
  }
};

// ✅ Main async workflow using retry
const main = async () => {
  try {
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);
    log("Product Catalog", products);

    for (const product of products) {
      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        log(`Reviews for ${product.name}`, reviews);
      } catch (err) {
        logError(`fetching reviews for ${product.name}`, err);
      }
    }

    try {
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      log("Sales Report", report);
    } catch (err) {
      logError("fetching sales report", err);
    }

  } catch (err) {
    logError("overall application", err);
  }
};

// 🔁 Run the app
main();
