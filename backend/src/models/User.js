const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 100
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},{
    timestamps:true
});


userSchema.methods.checkPassword = async (pass)=>{
    return await bcrypt.compare(pass, this.password);
}

const User = mongoose.model("User",userSchema);


module.exports = User;