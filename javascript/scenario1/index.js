const API_URL = 'https://dummyjson.com/products';

const productList = document.getElementById("productList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

let products = [];

async function fetchData(){
    try{
        loading.style.display = "block";
        error.textContent = "";

        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error("Failed[ to fetch products");
        }
        
        const data = await response.json();
        return data.products;
    }catch(err){
        error.textContent = err.message;
        return [];
    }finally {
        loading.style.display = "none";
    }
}

// fetchData().then(console.log);
function renderData(products){
    productList.innerHTML = "";
    if (products.length === 0){
        productList.innerHTML = `
            <tr>
                <td colspan="5">
                    No products found
                </td>
            </tr>
        `;
        return;
    }

    products.forEach((product) => { 
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img
                class="product-img"
                src="${product.thumbnail}"
                alt="${product.title}"
            >
            <div class="product-title">${product.title}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-btn">Add</button>
        `;

        const addButton = card.querySelector(".add-btn");
        addButton.addEventListener("click", () => {
            handleAddToCart(product);
        });

        productList.appendChild(card);
    });
};


async function handleAddToCart(){
    console.log("ye kaam kar raha h...");
}
async function helper() { 
    products = await fetchData(); 
    renderData(products);
}

helper();