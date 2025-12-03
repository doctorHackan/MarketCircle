const bcrypt = require('bcrypt');

const generatePassword = async (plainPass)=>{
    const rounds = 10;
    return await bcrypt.hash(plainPass,rounds);
}

module.exports = generatePassword;