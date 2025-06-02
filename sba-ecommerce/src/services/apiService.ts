// sba-ecommerce/src/services/apiService.ts

import { AppError } from '../utils/errorHandler.js';

const BASE_URL = 'https://dummyjson.com/products';

/**
 * Fetches all products from the API.
 */
export async function fetchAllProducts(): Promise<any[]> {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new AppError(`Failed to fetch products: ${response.statusText}`, response.status);
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new AppError(`fetchAllProducts error: ${(error as Error).message}`);
  }
}

/**
 * Fetches a single product by ID.
 */
export async function fetchProductById(id: number): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new AppError(`Product not found (ID ${id})`, response.status);
    }
    return await response.json();
  } catch (error) {
    throw new AppError(`fetchProductById error: ${(error as Error).message}`);
  }
}
