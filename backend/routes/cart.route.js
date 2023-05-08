const express = require("express");

const {CartModel} = require("../models/cart.model");

const {cartAuth} = require("../middlewares/cartAuth.middleware");

const cartRouter = express.Router();

cartRouter.use(cartAuth);

cartRouter.post("/add",async(req,res)=>{
    // console.log(req.body);
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

cartRouter.delete("/delete",async(req,res)=>{
    try {
        await CartModel.deleteMany({userID:req.body.userID});
        res.status(200).json({message:`All cart items of ${req.body.userName} is deleted`});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

cartRouter.patch("/update/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        await CartModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).json({message:`Cart item with id : ${id} has been updated`})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

module.exports = {cartRouter};