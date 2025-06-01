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
