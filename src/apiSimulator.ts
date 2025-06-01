// src/apiSimulator.ts

import { NetworkError, DataError } from "./customErrors";

// Define a reusable Product type
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Simulate fetching a product catalog
export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject(new NetworkError("Failed to fetch product catalog"));
      }
    }, 1000);
  });
};

// Simulate fetching reviews for a product
export const fetchProductReviews = (productId: number): Promise<{ user: string; comment: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { user: "Alice", comment: "Great product!" },
          { user: "Bob", comment: "Very satisfied." }
        ]);
      } else {
        reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
      }
    }, 1500);
  });
};

// Simulate fetching a sales report
export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({
          totalSales: 50000,
          unitsSold: 250,
          averagePrice: 200
        });
      } else {
        reject(new DataError("Failed to fetch sales report"));
      }
    }, 1000);
  });
};
