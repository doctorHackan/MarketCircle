const express = require('express');
const connectDB = require('./src/configs/db');
require('dotenv').config();
const ProductRoutes = require('./src/routes/ProductRoutes');
const UserRoutes = require('./src/routes/UserRoutes');
const cookieParser = require('cookie-parser');


const app = express();


app.use(express.json());
app.use(cookieParser());


const port = process.env.PORT;



app.use('/api/product',ProductRoutes);
app.use('/api/user',UserRoutes);











connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Listening at port ${port}`);
    });
})
.catch((err)=>{
    console.log("Could not Connect to DB");
    console.log("Error :",err.message);
});