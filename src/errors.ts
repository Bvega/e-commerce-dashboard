// Custom error for network-related issues
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

// Custom error for data inconsistencies or missing fields
export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}
