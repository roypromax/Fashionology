const express = require("express");

const {auth} = require("../middlewares/auth.middleware");

const {ProductModel} = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async(req,res)=>{
    const {mainCategory,subCategory,page,limit} = req.query;
    const query = {};

    if(mainCategory) query.mainCategory = mainCategory;

    if(subCategory) query.subCategory = subCategory;

    try {
        const products = await ProductModel.find(query).skip((page-1)*limit).limit(+limit);
        res.status(200).send(products).json();
    } catch (error) {
        res.status(400).send({err:error}).json();
    }
})

productRouter.use(auth);

productRouter.post("/add",async(req,res)=>{
    try {
        const newProduct = new ProductModel(req.body);
        await newProduct.save();
        res.status(200).send({msg:"Product has been added"}).json();
    } catch (error) {
        res.status(400).send({err:error}).json();
    }
})

module.exports = {productRouter}