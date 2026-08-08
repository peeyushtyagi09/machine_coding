const data = async() => {
    try{
        const response = await fetch('https://dummyjson.com/products?sortBy=title&order=asc');
        return response.json();
    }catch(err){
        console.log(' Their is some error in fetching data from server ->', err);
    }
}

data().then(console.log);