const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token;
    if(token){
        try{
            const secret_key = process.env.JWT_KEY;
            const payload = jwt.verify(token, secret_key);
            const id = payload.id;
            const isAdmin = payload.isAdmin;

            req.user = {id,isAdmin};
            next();
        }
        catch(err){
            res.status(400).json({Message: "Invalid Token"});
        }
    }
    else{
        res.status(400).json({Message: "No token"});
    }
}


module.exports = authMiddleware;