const data = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/search?q=phone');
        return await response.json();
    } catch (err) {
        console.log('There is some error in fetching data ->', err);
    }
};

data().then(result => {
    if (result && result.products && result.products.length > 0) {
        result.products.forEach(product => {
            console.log(product.category);
        });
    } else {
        console.log('No products found or invalid result.');
    }
});