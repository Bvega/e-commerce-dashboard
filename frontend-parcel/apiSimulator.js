"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 }
                ]);
            }
            else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.85) {
                resolve([
                    { user: "Alice", comment: "Great product!" },
                    { user: "Bob", comment: "Very satisfied." }
                ]);
            }
            else {
                reject(`Failed to fetch reviews for product ID ${productId}`);
            }
        }, 1000);
    });
};
exports.fetchProductReviews = fetchProductReviews;
const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({ totalSales: 50000, unitsSold: 250, averagePrice: 200 });
            }
            else {
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
