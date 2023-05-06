const express = require("express");

const {auth} = require("../middlewares/auth.middleware");

const {ProductModel} = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async(req, res) => {
    const {mainCategory, subCategory, page, limit} = req.query;
    const query = {};

    if(mainCategory) query.mainCategory = mainCategory;

    if(subCategory) query.subCategory = subCategory;

    try {
        const products = await ProductModel.find(query).skip((page-1)*limit).limit(+limit);
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

productRouter.get("/:id", async(req, res) => {
    const id = req.params.id;

    try {
        const product = await ProductModel.findById({_id:id});
        if (!product) {
            res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

productRouter.use(auth);

productRouter.post("/add", async(req, res) => {
    try {
        const newProduct = new ProductModel(req.body);
        await newProduct.save();
        res.status(201).json({message: "Product has been added"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = {productRouter};
