# E-Commerce Dashboard

A simulated e-commerce dashboard built in TypeScript demonstrating asynchronous operations, error handling, and retry mechanisms. It includes a basic frontend powered by Parcel.

## 🚀 Features

- Fetches product catalog, reviews, and sales report using Promises
- Custom error handling with retry logic
- Frontend interface that displays:
  - Product list
  - Product reviews
  - Sales report
- Enhancements include:
  - Loading indicators for async operations
  - Styled review blocks and error messages
  - A footer for attribution

## 🛠 Tech Stack

- TypeScript
- Parcel (for frontend bundling)
- HTML & CSS
- Git & GitHub for version control

## 📁 Project Structure

```
e-commerce-dashboard/
├── src/
│   ├── index.ts              # Backend orchestration logic
│   ├── retryPromise.ts       # Retry utility for Promises
│   ├── customErrors.ts       # Custom error classes
│   └── dataErrors.ts         # Data-specific error utilities
├── frontend-parcel/
│   ├── main.ts               # Frontend logic using DOM manipulation
│   ├── index.html            # HTML structure
│   ├── style.css             # CSS styles
│   └── assets/               # Images and media
├── dist/                     # Compiled TypeScript output
├── package.json
├── tsconfig.json
└── README.md
```

## 📦 Installation & Usage

```bash
# Install dependencies
npm install

# Build backend logic
npm run build

# Run the backend simulation
npm start

# Start the frontend development server
npm run dev
```

## ✅ Final Version

Tag: `v1.0.0`

This version completes the Lab 2 requirements with frontend enhancements.