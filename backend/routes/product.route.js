const express = require("express");

const {auth} = require("../middlewares/auth.middleware");

const {ProductModel} = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async(req,res)=>{
    try {
        const products = await ProductModel.find();
        res.status(200).send(products).json();
    } catch (error) {
        res.status(400).send({err:error}).json();
    }
})

productRouter.use(auth);

productRouter.post("/add",(req,res)=>{

})

module.exports = {productRouter}