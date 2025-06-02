import { Product } from './models/Product.js';
import { calculateDiscount } from './utils/discountCalculator.js';
import { calculateTax } from './utils/taxCalculator.js';

const sampleProduct = new Product({
  id: 1,
  title: "Sample Phone",
  description: "A test product used for demo purposes",
  price: 500,
  discountPercentage: 10,
  rating: 4.5,
  stock: 32,
  brand: "TestBrand",
  category: "electronics",
  thumbnail: "https://example.com/thumb.jpg",
  images: ["https://example.com/img1.jpg", "https://example.com/img2.jpg"]
});

sampleProduct.displayDetails();

const discount = calculateDiscount(sampleProduct.price, sampleProduct.discountPercentage);
console.log(`Calculated discount: $${discount}`);
console.log(`Price after discount (from method): $${sampleProduct.getPriceWithDiscount()}`);
// After calculating discount
const tax = calculateTax(sampleProduct.price, sampleProduct.category);
console.log(`Calculated tax: $${tax}`);

const finalPrice = sampleProduct.price - discount + tax;
console.log(`Final price after discount + tax: $${finalPrice.toFixed(2)}`);
