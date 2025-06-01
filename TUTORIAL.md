
### 📘 `TUTORIAL.md` — E-Commerce Dashboard: Backend Development Walkthrough

---

## 🎯 Objective

Build a robust backend simulation for an **e-commerce dashboard** using TypeScript. Learn how to handle **asynchronous operations**, simulate **API unreliability**, and build **resilient workflows** using Promises, custom errors, and retry logic.

---

## 🗂️ Project Setup

```bash
mkdir e-commerce-dashboard
cd e-commerce-dashboard
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init
```

### 🔧 Sample `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## 📁 Project Structure

```
e-commerce-dashboard/
│
├── src/
│   ├── apiSimulator.ts        # Simulates API calls
│   ├── retryPromise.ts        # Implements retry mechanism
│   ├── customErrors.ts        # Custom error classes
│   ├── index.ts               # Main application logic
│
├── dist/
├── package.json
├── tsconfig.json
├── README.md
├── TUTORIAL.md
```

---

## 💡 Core Concepts & Implementation

### 1️⃣ Promises – Asynchronous Workflows

#### Example (in `apiSimulator.ts`):

```ts
export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8
        ? resolve([{ id: 1, name: "Laptop", price: 1200 }])
        : reject(new NetworkError("Failed to fetch product catalog"));
    }, 1000);
  });
};
```

**💬 Why?** Simulates a network call that might fail — gives a realistic feel of working with APIs.

---

### 2️⃣ Custom Errors – Improve Debugging

#### In `customErrors.ts`:

```ts
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
```

**💬 Why?** Differentiates between a network problem and a bad data structure — great for troubleshooting and logging.

---

### 3️⃣ Retry Mechanism – Resilient Operations

#### In `retryPromise.ts`:

```ts
export const retryPromise = async <T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 1) throw error;
    console.log(`Retrying... Attempts left: ${retries - 1}`);
    await new Promise((res) => setTimeout(res, delay));
    return retryPromise(fn, retries - 1, delay);
  }
};
```

**💬 Why?** A failing API call gets additional chances to succeed — improves reliability in flaky conditions.

---

### 4️⃣ Main Application Logic – Orchestrating Calls

#### In `index.ts`:

```ts
const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);

for (const product of products) {
  try {
    const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
    console.log(`✅ Reviews for ${product.name}:`, reviews);
  } catch (err) {
    console.error(`🌐 Network error fetching reviews: ${err}`);
  }
}
```

**💬 Why?** Demonstrates chaining, retry logic, and precise error handling at a product level.

---

## 🚀 Run & Test

```bash
npm run build
npm start
```

---

## 🧩 How It All Connects

| Concept       | Role                                                   | Related File      |
| ------------- | ------------------------------------------------------ | ----------------- |
| Promises      | Model async API calls                                  | `apiSimulator.ts` |
| Custom Errors | Distinguish error types                                | `customErrors.ts` |
| Retry Logic   | Handle transient failures automatically                | `retryPromise.ts` |
| Main Logic    | Glues everything together with precise error reporting | `index.ts`        |

---

## 🧠 Practice Questions

1. What are the advantages of handling errors locally within each async operation?
2. How do `NetworkError` and `DataError` improve your debugging workflow?
3. Why is it valuable to retry a failed request instead of immediately failing?

---

