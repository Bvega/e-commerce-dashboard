

---

### 📄 `sba-ecommerce/README.md`

```markdown
# 🛒 E-commerce Product Management System

This project is part of the SBA for the *TypeScript and Advanced JavaScript* module. It demonstrates core programming concepts including object-oriented design, TypeScript type safety, asynchronous operations, utility modules, and API integration.

---

## 📦 Features

- Fetches product data from [DummyJSON API](https://dummyjson.com)
- Models product structure using a custom `Product` class
- Calculates:
  - 💲 Discount amount
  - 🧾 Tax amount (standard 4.75%, 3% for groceries)
  - 🧮 Final price after discount and tax
- Handles API and runtime errors gracefully
- Follows clean and modular TypeScript architecture

---

## 🛠️ Project Structure

```

sba-ecommerce/
├── src/
│   ├── models/              # Product class
│   ├── services/            # API integration
│   ├── utils/               # Tax, discount, and error handling
│   └── main.ts              # Main application logic
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project overview
└── SBA-Reflection.md        # Developer reflection

````

---

## 🚀 Getting Started
---

## 🖥️ Optional UI

This project includes a fully optional user interface built with plain HTML, CSS, and JavaScript to interact with the DummyJSON API and apply discount and tax calculations.

### 📂 Located in: `public/`

- `index.html` — Input field for product ID
- `app.js` — Fetches product and calculates final price
- `style.css` — Minimal and elegant design

### 💡 How to Use

1. Open `sba-ecommerce/public/index.html` in your browser
2. Enter a valid product ID (e.g., 1–30)
3. View detailed product info, calculated discount, tax, and final price

This interface demonstrates practical application of your business logic on the frontend without requiring any build tools or frameworks.

### Prerequisites

- Node.js v18+ recommended
- TypeScript installed globally or locally via `devDependencies`

### Installation

```bash
cd sba-ecommerce
npm install
````

### Build and Run

```bash
npx tsc --project tsconfig.json
node dist/main.js
```

---

## 📖 Educational Objectives

* Apply TypeScript typing and strict mode
* Use object-oriented programming principles
* Build clean, modular utility functions
* Work with REST APIs using `async/await`
* Gracefully handle errors with a custom `AppError`

---

## 📚 API Used

* [DummyJSON Products API](https://dummyjson.com/products)

---

## 👨‍🎓 Author

Bolivar Vega — SBA TypeScript & Advanced JS, 2025-RTT-23

