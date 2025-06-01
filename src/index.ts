import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";

// Entry point function
const runDashboard = () => {
  // Step 1: Fetch product catalog
  fetchProductCatalog()
    .then(products => {
      console.log("✅ Products:", products);

      // Step 2: Fetch reviews for each product
      const reviewPromises = products.map(product =>
        fetchProductReviews(product.id)
          .then(reviews => {
            console.log(`💬 Reviews for ${product.name}:`, reviews);
          })
          .catch(err => {
            console.error(`⚠️ Error fetching reviews for ${product.name}:`, err);
          })
      );

      // Step 3: After all reviews, fetch sales report
      Promise.all(reviewPromises)
        .then(() => {
          return fetchSalesReport();
        })
        .then(report => {
          console.log("📊 Sales Report:", report);
        })
        .catch(err => {
          console.error("⚠️ Error fetching sales report:", err);
        })
        .finally(() => {
          console.log("✅ All API calls attempted.");
        });
    })
    .catch(err => {
      console.error("❌ Fatal error fetching product catalog:", err);
    });
};

runDashboard();
