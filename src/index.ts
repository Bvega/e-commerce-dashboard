import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';
import { NetworkError, DataError } from './errors';

const testAPI = async () => {
  try {
    const products = await fetchProductCatalog();
    console.log("✅ Product Catalog:", products);

    for (const product of products) {
      try {
        const reviews = await fetchProductReviews(product.id);
        console.log(`✅ Reviews for ${product.name}:`, reviews);
      } catch (error) {
        if (error instanceof NetworkError) {
          console.error("🌐 Network error fetching reviews:", error.message);
        } else {
          console.error("⚠️ Unexpected error fetching reviews:", error);
        }
      }
    }

    try {
      const report = await fetchSalesReport();
      console.log("✅ Sales Report:", report);
    } catch (error) {
      if (error instanceof DataError) {
        console.error("📊 Data error fetching sales report:", error.message);
      } else {
        console.error("⚠️ Unexpected error fetching sales report:", error);
      }
    }

  } catch (error) {
    if (error instanceof NetworkError) {
      console.error("🌐 Network error fetching catalog:", error.message);
    } else {
      console.error("❌ Unexpected fatal error:", error);
    }
  }
};

testAPI();
