const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) =>{
    res.send("Hello from DevOps Pipeline App");
})

app.get('/health', (req,rea) =>{
    res.status(200).json({status : "ok"});
})

app.listen(PORT, ()=>{
    console.log(`Server being listened at ${PORT}`);
})