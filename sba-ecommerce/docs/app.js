// Get DOM elements
const form = document.getElementById('product-form');
const output = document.getElementById('product-output');
const errorMsg = document.getElementById('error-message');

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  output.innerHTML = '';
  errorMsg.textContent = '';

  const id = document.getElementById('productId').value;

  try {
    // Fetch product from DummyJSON API
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error('Product not found');

    const data = await res.json();

    // Calculate discount
    const discount = parseFloat((data.price * (data.discountPercentage / 100)).toFixed(2));

    // Apply category-based tax rate
    const taxRate = data.category.toLowerCase() === 'groceries' ? 0.03 : 0.0475;
    const tax = parseFloat((data.price * taxRate).toFixed(2));

    // Compute final price
    const finalPrice = (data.price - discount + tax).toFixed(2);

    // Render product info
    output.classList.remove('hidden');
    output.innerHTML = `
      <h2>${data.title}</h2>
      <p><strong>Description:</strong> ${data.description}</p>
      <p><strong>Brand:</strong> ${data.brand}</p>
      <p><strong>Category:</strong> ${data.category}</p>
      <p><strong>Price:</strong> $${data.price}</p>
      <p><strong>Discount:</strong> $${discount}</p>
      <p><strong>Tax:</strong> $${tax}</p>
      <p><strong><u>Final Price:</u></strong> $${finalPrice}</p>
      <img src="${data.thumbnail}" alt="Product image" />
    `;
  } catch (err) {
    errorMsg.textContent = err.message;
  }
});
