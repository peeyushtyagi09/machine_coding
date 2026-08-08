const API_URL = 'https://dummyjson.com/products';

const productList = document.getElementById("productList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

let products = [];
const fetchData = async() => {
    try{
        const response = await fetch(API_URL);
        return response.json();
    }catch(err){
        console.log("their are some error in that", err);
    }
}

// fetchData().then(console.log);
function renderData(products){
    
};

async function helper() { 
    products = await fetchData(); 
    renderData(products);
}

helper();