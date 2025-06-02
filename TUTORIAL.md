# E-Commerce Dashboard – Lab 2 Tutorial

This tutorial walks you through the implementation of the **E-Commerce Dashboard**, a lab assignment designed to demonstrate your understanding of Promises, error handling, and asynchronous operations in JavaScript/TypeScript.

---

## 🛠️ Project Setup

### 1. Initialize Project
```bash
mkdir e-commerce-dashboard
cd e-commerce-dashboard
npm init -y
```

### 2. Install Dependencies
```bash
npm install typescript parcel --save-dev
npx tsc --init
```

### 3. Folder Structure
```
e-commerce-dashboard/
├── src/
│   ├── index.ts           # Backend logic
│   ├── customErrors.ts    # Custom error classes
│   └── retryPromise.ts    # Retry mechanism
├── frontend-parcel/
│   ├── main.ts            # Frontend logic
│   ├── style.css          # Styles
│   └── index.html         # HTML layout
├── assets/
│   └── (image files)
├── README.md
└── TUTORIAL.md
```

---

## 🧠 Lab Objectives

- ✅ Work with Promises to handle asynchronous flows
- ✅ Use `.catch()` and `.finally()` for error handling
- ✅ Build a retry mechanism with recursion
- ✅ Implement a basic front end using Parcel
- ✅ Apply loading states, error UI, and clean structure

---

## 🔃 Simulated API Calls (apiSimulator.ts)

Implements mocked functions for:

- `fetchProductCatalog()`
- `fetchProductReviews(productId)`
- `fetchSalesReport()`

Each uses `setTimeout` with a random failure to simulate network behavior.

---

## 💥 Error Handling

Custom error classes in `customErrors.ts`:

```ts
export class NetworkError extends Error {}
export class DataError extends Error {}
```

---

## 🔁 Retry Mechanism

In `retryPromise.ts`:
```ts
export function retryPromise<T>(fn: () => Promise<T>, retries: number, delay: number): Promise<T> { ... }
```

---

## 🌐 Frontend (main.ts)

- Fetches product catalog, product reviews, and sales report.
- Uses DOM manipulation to render product cards.
- Displays loading, success, and error states with stylings.
- Includes retry logic and handles errors gracefully.

---

## 🎨 Styling (style.css)

Basic layout with card UI, review styling, error blocks, and footer.

---

## 🚀 Run the App

Build the TypeScript backend:
```bash
npm run build
```

Run the frontend with Parcel:
```bash
npm run dev
```

Open browser at `http://localhost:1234`.

---

## ✅ Wrap Up

Your application demonstrates:

- Practical use of Promises
- Custom error classification
- Retry mechanism
- UI that reflects real-world async operations

This README and tutorial can be committed as part of your educational project portfolio.