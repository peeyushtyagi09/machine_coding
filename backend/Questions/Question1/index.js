const express = require("express");
const app = express();

app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(PORT,() => {
    console.log(" server is running on port..")
});

