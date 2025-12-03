const jwt = require('jsonwebtoken');

const generateToken = (id,isAdmin)=>{
    const secret_key = process.env.JWT_KEY;
    const token = jwt.sign({
        id,isAdmin
    },secret_key,{expiresIn:'3d'});
    return token;
}

const validateToken = (token)=>{
    return jwt.verify(token,secret_key);
}


module.exports = { generateToken, validateToken };