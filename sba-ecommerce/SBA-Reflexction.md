# SBA Reflection

## TypeScript and OOP Implementation
In this project, I used TypeScript with strict typing to build a structured and modular e-commerce product management system. I implemented a `Product` class to model API data and encapsulate behavior like displaying product details and calculating discounted prices. This demonstrated core object-oriented principles such as encapsulation and method abstraction.

## Challenges and Solutions
One of the biggest challenges was managing the folder structure and configuring TypeScript correctly, especially to isolate the SBA workspace. I resolved it by creating a separate `sba-ecommerce` directory with its own `tsconfig.json`. Another challenge was resolving import paths and Node.js runtime errors. I learned to use `.js` extensions in ESModule-compatible imports and how to use `async/await` properly within error-handled blocks.

## Asynchronous Operations and Error Handling
I used `async/await` to fetch product data from the DummyJSON API and wrapped logic in `try/catch` blocks for safety. I created a custom `AppError` class for better error reporting and a `handleError()` utility to provide consistent feedback. These patterns helped me keep the code clean, reliable, and easy to debug.

