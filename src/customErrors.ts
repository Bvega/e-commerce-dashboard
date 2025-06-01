// src/customErrors.ts

// Represents a network-related error (e.g., connection issues, timeouts)
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

// Represents a data-related error (e.g., missing fields, invalid response)
export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}
