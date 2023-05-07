const express = require("express");

const {CartModel} = require("../models/cart.model");

const {cartAuth} = require("../middlewares/cartAuth.middleware");

const cartRouter = express.Router();

cartRouter.use(cartAuth);

cartRouter.post("/add",async(req,res)=>{
    try {
        const item = new CartModel(req.body);
        await item.save();
        res.status(200).json({message:"Product added to cart"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

cartRouter.get("/",async(req,res)=>{
    try {
        const cart = await CartModel.find({userID:req.body.userID})
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})