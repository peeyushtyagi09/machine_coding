let products = [];

const cartItems = document.getElementById("cartItems");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

function getdata(){
    products = localStorage.getItem("cart");
    console.log(products);
    console.log(products.id);
}

getdata();