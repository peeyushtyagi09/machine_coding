const API_URL = "https://dummyjson.com/products?limit=100";

const productList = document.getElementById("productList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function fetchProducts() {
    try{
        loading.style.display = "block";
        error.textContent = "";

        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error("failed to fetch products");
        }
        const data = await response.json();

        return data.products;
    }catch (err){
        error.textContent = err.message;
        return [];
    }finally {
        loading.style.display = "none";
    }
}

function renderProducts(products){
    productList.innerHTML = "";
    products.forEach((product) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${product.id}</td>

        <td>${product.title}</td>

        <td>${product.category}</td>

        <td>$${product.price}</td>

        <td>
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >
        </td>
    `;
     row.innerHTML = `
            <td>${product.id}</td>

            <td>${product.title}</td>

            <td>${product.category}</td>

            <td>$${product.price}</td>

            <td>
                <img
                    src="${product.thumbnail}"
                    alt="${product.title}"
                >
            </td>
        `;
        productList.appendChild(row);
    });
}

async function init(){
    const products = await fetchProducts();
    renderProducts(products);
}

init();