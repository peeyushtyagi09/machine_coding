const express = require("express");
const {PORT} = require("./example.env.js");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log("😊Hello...😊")
});
console.log("port",PORT)
app.listen(PORT, () => {
    console.log(`🤠Server is running on PORT, ${PORT}🤠`)
});