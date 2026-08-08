const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
    {
        originalUrl:{
            type: String, 
            required: true,
            index: true,
        },
        shortCode: {
            type: String, 
            required: true, 
            unique: true, 
            index: true,
        }, 
        clicks: {
            type:Number, 
            default: 0,
        },
        lastAccessedAt: Date,
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Url", UrlSchema)