let products = [
    { id: 1, name: 'Notebook', price: 50, image: 'images/ball.webp' },
    { id: 2, name: 'Ballpen', price: 20, image: 'images/pen.webp' },
    { id: 3, name: 'Pencil', price: 10, image: 'images/notebook.webp' },
    // ... more products
];

window.onload = function() {
    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;  // Dynamically setting the image source
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        productsContainer.appendChild(productCard);
    });
};
