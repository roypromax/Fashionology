const express = require("express");

const {auth} = require("../middlewares/auth.middleware");

const {ProductModel} = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async(req, res) => {
    const {mainCategory, subCategory, minRating, page, limit, order} = req.query;
    const query = {};
    const sortBy = {};

    if(mainCategory) query.mainCategory = mainCategory;

    if(subCategory) query.subCategory = subCategory;

    if(minRating) query.rating = {$gte:+minRating};

    if(order==="asc"){
        sortBy.price = 1
    }else if(order==="desc"){
        sortBy.price = -1;
    }

    try {
        const products = await ProductModel.find(query).skip((page-1)*limit).limit(+limit).sort(sortBy);
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

productRouter.patch("/update/:productID",async(req,res)=>{
    const {productID} = req.params;
    try {
        await ProductModel.findByIdAndUpdate({_id:productID},req.body)
        res.status(200).json({message:`Product with id : ${productID} has been updated`});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

productRouter.delete("/delete/:productID",async(req,res)=>{
    const {productID} = req.params;
    try {
        await ProductModel.findByIdAndDelete({_id:productID})
        res.status(200).json({message:`Product with id : ${productID} has been deleted`});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

module.exports = {productRouter};
