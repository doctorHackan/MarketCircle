

const authAdmin = (req,res,next)=>{
    const {id,isAdmin} = req.user;
    if(isAdmin)next();
    else return res.status(400).json({Message : "Only admin can add products"});
}

module.exports = authAdmin;