const data = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/search?q=phone');
        return await response.json();
    } catch (err) {
        console.log('There is some error in fetching data ->', err);
    }
};
