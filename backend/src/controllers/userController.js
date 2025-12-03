const User = require("../models/User");
const generatePassword = require("../utils/generatePassword");
const { validateUser, validateLogin } = require("../utils/userValidator");
const { generateToken } = require('../utils/token');


const registerUser = async (req,res)=>{
    try{
        
        // validate user data
        const {error} = validateUser(req.body);
        if(error){
            return res.status(400).json({Message: error.details[0].message});
        }
        
        
        let {name,email,password,isAdmin} = req.body;
        if(!isAdmin) isAdmin = false;

        const hashedPass = await generatePassword(password);

        await User.create({name,email,password:hashedPass,isAdmin});
        res.status(201).json({Message: "User registered"});
    }
    catch(err){
        res.status(500).json({Message: err.message});
    }
}


const loginUser = async (req,res)=>{
    try{

        // validate login data
        const {error} = validateLogin(req.body);
        if(error){
            return res.status(400).json({Message: error.details[0].message});
        }


        const {name,email,password} = req.body;
        const user = await User.findOne({email});

        const token = generateToken(user._id,user.isAdmin);
        res.cookie('token',token);
        res.status(200).json({Message: "Login Successful"});
    }
    catch(err){
        res.status(500).json({Message: err.message});
    }
}

const logoutUser = async (req,res)=>{
    try{
        res.cookie('token',null,{expires: new Date(Date.now())});
        res.status(200).json({Message: "Logout Successful"});
    }
    catch(err){
        res.status(500).json({Message: err.message});
    }
}


const myDetails = async (req,res)=>{
    try{
        const {id} = req.user;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({Message: err.message});
    }
}


module.exports = {registerUser,loginUser,logoutUser,myDetails};