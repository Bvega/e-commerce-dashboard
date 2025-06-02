// sba-ecommerce/src/utils/discountCalculator.ts

/**
 * Calculates the discount amount in dollars.
 * @param price - Original price of the product.
 * @param discountPercentage - Discount percentage (e.g. 15 for 15%).
 * @returns The amount discounted from the original price.
 */
export function calculateDiscount(price: number, discountPercentage: number): number {
  const discount = (price * discountPercentage) / 100;
  return parseFloat(discount.toFixed(2));
}
