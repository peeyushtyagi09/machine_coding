const API_URL = "https://dummyjson.com/products";

const allProducts = document.getElementById('allProducts');
const input = document.getElementById('input');
const categorySelect = document.getElementById('category-select');
const sortSelect = document.getElementById('sort-select');

let products = [];

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.log("There is some kind of error in data fetching....", error);
        return [];
    }
}

fetchData().then(fetchProducts => {
    products = fetchProducts;
    renderProducts(products);
});

function renderProducts(productsArr = products) {
    if (!productsArr || productsArr.length === 0) {
        allProducts.innerHTML = `<h1>No products found</h1>`;
        return;
    }

    // Optionally you could show number of products here as well
    allProducts.innerHTML = `
        <div>
            <h3>Total Products: ${productsArr.length}</h3>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 16px;">
            ${productsArr.map(product => `
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 12px; width: 200px;">
                    <h2 style="font-size: 1.1em;">${product.title}</h2>
                    <img src="${product.thumbnail}" alt="${product.title}" style="width:100%; border-radius:4px;" />
                    <p>Price: $${product.price}</p>
                    <p style="font-size: 0.97em; color: #666;">${product.category}</p>
                </div>
            `).join('')}
        </div>
    `;
}


input.addEventListener('input', (e) => {
    let val = e.target.value.toLowerCase().trim();
    const filterProducts = products.filter(product =>
        product.title.toLowerCase().includes(val) ||
        product.category.toLowerCase().includes(val)
    );
    renderProducts(filterProducts);
});

categorySelect.addEventListener("change", (e) => {
    let val = e.target.value.toLowerCase();
    let filterProducts;
    if (val === "") {
        filterProducts = products; 
    } else {
        filterProducts = products.filter(product => product.category.toLowerCase() === val);
    }
    renderProducts(filterProducts);
});


sortSelect.addEventListener("change", (e) => {
    let val = e.target.value.toLowerCase();
    let sortedProducts = [...products];
    if(val === ""){
        sortedProducts = products;
    }else if(val === "asc"){
        sortedProducts.sort((a, b) => a.price - b.price);
    }else{
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    renderProducts(sortedProducts);
});