import { Product } from './models/Product.js';
import { calculateDiscount } from './utils/discountCalculator.js';
import { calculateTax } from './utils/taxCalculator.js';
import { AppError, handleError } from './utils/errorHandler.js';
import { fetchProductById } from './services/apiService.js';

async function runApp() {
  try {
    // Fetch product data from API
    const productData = await fetchProductById(1); // you can change the ID to test different products

    // Create Product instance from API data
    const product = new Product(productData);

    product.displayDetails();

    const discount = calculateDiscount(product.price, product.discountPercentage);
    const tax = calculateTax(product.price, product.category);
    const finalPrice = product.price - discount + tax;

    console.log(`Calculated discount: $${discount}`);
    console.log(`Calculated tax: $${tax}`);
    console.log(`Final price after discount + tax: $${finalPrice.toFixed(2)}`);
  } catch (error) {
    handleError(error);
  }
}

runApp();
