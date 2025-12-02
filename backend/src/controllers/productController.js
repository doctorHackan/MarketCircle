const Product = require("../models/Product");


const addProduct = async (req,res)=>{
    try{
        const product = req.body;
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