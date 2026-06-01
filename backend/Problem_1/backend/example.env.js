require("dotenv").config();

const PORT = process.env.PORT;
const MongoDb_Uri = process.env.MONGODB_URI;

module.exports = {
    PORT,
    MongoDb_Uri
};