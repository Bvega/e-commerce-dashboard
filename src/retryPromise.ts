// src/retryPromise.ts

/**
 * Retries an async operation on failure.
 *
 * @param fn - A function that returns a Promise
 * @param retries - Number of retry attempts
 * @param delay - Delay between retries in milliseconds
 */
export const retryPromise = async <T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying... Attempts left: ${retries}`);
      await new Promise(res => setTimeout(res, delay));
      return retryPromise(fn, retries - 1, delay);
    } else {
      throw error;
    }
  }
};
