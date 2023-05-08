const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    price:{type:Number,required:true},
    size:{type:String,required:true},
    quantity:{type:Number,required:true,default:1},
    color:{type:String,required:true},
    mainCategory:{type:String,enum:["clothing","shoes","accessories","beauty & wellness"],required:true},
    subCategory:{type:String,required:true},
    images:{type:Array,required:true},
    brand:{type:String,required:true},
    description:{type:String,required:true},
    userID:{type:String,required:true},
    userName:{type:String,required:true}
},{
    versionKey:false
})

const CartModel = mongoose.model("cart",cartSchema);

module.exports = {CartModel};