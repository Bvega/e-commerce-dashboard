# E-Commerce Dashboard

## 🧪 Lab 2: Promises and Error Handling

This project simulates an e-commerce dashboard that fetches data from various APIs, including a product catalog, user reviews, and a sales report. It demonstrates effective error handling strategies using Promises in TypeScript.

### ✅ Features

- Simulated APIs (`fetchProductCatalog`, `fetchProductReviews`, `fetchSalesReport`)
- Custom error classes: `NetworkError`, `DataError`
- Retry mechanism using `retryPromise`
- Graceful error handling with `.catch()` and `.finally()`
- Thorough logging of asynchronous flows

### 📁 Backend Structure

```
src/
├── index.ts              # Main orchestration logic
├── apiSimulator.ts       # Fake async API calls with error simulation
├── retryPromise.ts       # Retry utility using recursion
├── customErrors.ts       # Custom error class definitions
├── errors.ts             # Optional constants or helpers
```

### 🛠️ Getting Started

Install dependencies and run the backend logic:

```bash
npm install
npm run build
npm start
```

---

## 🌐 Optional Frontend: Parcel + TypeScript

The `frontend-parcel/` folder contains a simple UI built with Parcel to visually display the catalog and error messages.

### 🔧 Features

- Basic DOM rendering using TypeScript
- Retry logic integrated in UI (`retryPromise`)
- Styling with `style.css`
- Built with Parcel

### 📁 Frontend Structure

```
frontend-parcel/
├── index.html            # Entry HTML with <script type="module">
├── main.ts               # UI rendering + error handling logic
├── style.css             # Basic CSS for cards and error messages
```

### ▶️ Run Frontend

```bash
npm run dev
```

Open [http://localhost:1234](http://localhost:1234) to view the dashboard.

---

## 📚 Educational Value

This project demonstrates:

- Understanding of Promise chaining and error management
- Reusable error patterns and custom error typing
- Resilience via retries
- Separation of backend logic and optional UI layer