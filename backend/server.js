const express = require('express');


const app = express();


app.get('/',(req,res)=>{
    res.status(200).json({Message: "Welcome"});
})


app.listen(4001, ()=>{
    console.log(`Listening at port 4001`);
});