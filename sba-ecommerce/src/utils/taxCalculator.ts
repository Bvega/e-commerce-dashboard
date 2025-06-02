// sba-ecommerce/src/utils/taxCalculator.ts

/**
 * Calculates the tax amount for a product.
 * Standard tax is 4.75%. For groceries, it's 3%.
 * 
 * @param price - The original product price.
 * @param category - The product category.
 * @returns The tax amount in dollars.
 */
export function calculateTax(price: number, category: string): number {
  const taxRate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
  const tax = price * taxRate;
  return parseFloat(tax.toFixed(2));
}
