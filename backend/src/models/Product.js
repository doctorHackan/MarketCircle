const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min:0
    },
    category:{
        type: String,
        required: true
    },
    countInStock:{
        type: Number,
        required: true,
        min:0
    },
    imageUrl:{
        type:String,
        required: true
    }
},{
    timestamps:true
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;