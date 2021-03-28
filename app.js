const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello');
});

const port = process.env.port || 3000;

app.listen(port,() =>{
    console.log("Listening at port 3000!");
});
