const express = require("express");
const cors = require('cors')
const {connection} = require("./configs/db");

const {userRouter} = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
const {cartRouter} = require("./routes/cart.route");

const app = express();
app.use(cors())
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Fashionology Backend");
})

app.use("/users",userRouter);

app.use("/products",productRouter);

app.use("/cart",cartRouter);

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

