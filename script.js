const products = [
    { name: "Product A", price: 49.99 },
    { name: "Product B", price: 29.99 },
    { name: "Product C", price: 99.99 },
    { name: "Product D", price: 19.99 },
    { name: "Product E", price: 39.99 }
];

// Function to display top N products
function displayTopProducts(n) {
    const productListDiv = document.getElementById('product-list');

    // Sort products by price (assuming descending order)
    products.sort((a, b) => b.price - a.price);

    // Display top N products
    for (let i = 0; i < n && i < products.length; i++) {
        const product = products[i];
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `<span class="product-name">${product.name}</span> - <span class="product-price">$${product.price.toFixed(2)}</span>`;
        productListDiv.appendChild(productDiv);
    }
}

// Call function to display top 3 products (you can change the number as needed)
displayTopProducts(3);