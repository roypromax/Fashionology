const express = require("express");

const {connection} = require("./configs/db");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Fashionology Backend");
})





app.listen(8080,async()=>{
    try {
        await connection;
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database");
        console.log({err:error});
    }
    
    console.log("Server is running at port 8080");
})

