const express = require("express");
const app = express();
const { PORT } = require("./example.env")


app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(PORT,() => {
    console.log(" server is running on port..", PORT);
});

