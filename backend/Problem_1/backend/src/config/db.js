const mongoose = require("mongoose");
const {MongoDb_Uri} = require("../../example.env.js");

const connectDB = async () => {
    try{
        await mongoose.connect(MongoDb_Uri);
        console.log("👌 Database is successFully connected to server 👌");
    }catch(error){
        console.log(`❌ their is an error in connected database to server  ❌, ${error}`);
    }
}

module.exports = {
    connectDB
};