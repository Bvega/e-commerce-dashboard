// sba-ecommerce/src/utils/errorHandler.ts

/**
 * Custom application error that extends the built-in Error object.
 */
export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Logs error details to the console in a readable format.
 * This could be extended to log to files or external services.
 */
export function handleError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(`[AppError] ${error.message} (Status: ${error.statusCode})`);
  } else if (error instanceof Error) {
    console.error(`[Unexpected Error] ${error.message}`);
  } else {
    console.error(`[Unknown Error]`, error);
  }
}
