const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    price:{type:Number,required:true},
    sizes:{type:Array,required:true},
    quantity:{type:Number,required:true},
    color:{type:String,required:true},
    mainCategory:{type:String,enum:["clothing","shoes","accessories","beauty & wellness"],required:true},
    subCategory:{type:String,required:true},
    images:{type:Array,required:true},
    brand:{type:String,required:true},
    description:{type:String,required:true},
},{
    versionKey:false
})

const ProductModel = mongoose.model("product",productSchema);

module.exports = {ProductModel};