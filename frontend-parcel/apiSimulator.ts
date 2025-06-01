import { Product } from "../src/index";

export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 }
        ]);
      } else {
        reject("Failed to fetch product catalog");
      }
    }, 1000);
  });
};

export const fetchProductReviews = (productId: number): Promise<{ user: string; comment: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) {
        resolve([
          { user: "Alice", comment: "Great product!" },
          { user: "Bob", comment: "Very satisfied." }
        ]);
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
      }
    }, 1000);
  });
};

export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({ totalSales: 50000, unitsSold: 250, averagePrice: 200 });
      } else {
        reject("Failed to fetch sales report");
      }
    }, 1000);
  });
};
