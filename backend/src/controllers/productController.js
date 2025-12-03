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
        const pageNumber = req.query.page || 1;
        const pageSize = 3;
        const product = req.query.name?
        {
            name:{
                $regex:req.query.name,
                $options:'i'
            }
        } : {};

        const total = await Product.countDocuments({...product});
        const totalPages = Math.ceil(total/pageSize);
        const foundProducts = await Product.find({...product})
        .skip((pageNumber-1)*pageSize)
        .limit(pageSize);

        res.status(200).json({totalPages,foundProducts});
    }
    catch(err){
        res.status(500).json({Message : err.message});
    }
}

module.exports = {addProduct,getProducts};