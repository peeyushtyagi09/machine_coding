const express = require("express");
const {PORT} = require("./example.env.js");
const {connectDB} = require("./src/config/db.js");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log("😊Hello...😊")
});

// connecting
connectDB();
console.log("port",PORT)
app.listen(PORT, () => {
    console.log(`🤠Server is running on PORT, ${PORT}🤠`)
});