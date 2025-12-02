const Product = require("../models/Product");
const validateProduct = require("../utils/productValidator");


const addProduct = async (req,res)=>{
    try{
        const product = req.body;

        const { error } = validateProduct(product);

        if(error){
            return res.status(400).json({Message : error.details[0].message});
        }

        await Product.create(product);
        res.status(201).json({Message: "Product Added"});
    }
    catch(err){
        res.status(500).json({Message: err.message});
    }
}

const getProducts = async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({Message : err.message});
    }
}

module.exports = {addProduct,getProducts};