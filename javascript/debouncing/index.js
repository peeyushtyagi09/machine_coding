
const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products?sortBy=title&order=asc');
        return response.json();
    } catch (err) {
        console.log('There is some error in fetching data from server ->', err);
    }
};

fetchData().then(result => {
    if (result && result.products && result.products.length > 0) { 
        result.products.forEach(product => {
            console.log(product.category);
        });
    }
});