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


/*
 
Sample

url = https://www.anthropologie.com/shop/farm-rio-macaw-elegance-maxi-skirt?category=clothes&color=038&type=STANDARD&quantity=1

{
    name:"Farm Rio Macaw Elegance Maxi Skirt",
    rating:4.5,    // keep rating between 3.0 to 5.0
    price: 195,
    sizes:["S","M","L","XL"],
    quantity:15, // this quantity will be for admin use
    color:"GREEN MOTIF",
    mainCategory:clothing",
    subCategory:"skirt",
    images:["https://images.urbndata.com/is/image/Anthropologie/4120638280144_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4120638280144_038_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4120638280144_038_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"], // keep atleast 3 images
    brand:"Farm Rio",
    description:"With vibrant colors, bold silhouettes, and feminine details embedded in every design, Farm Rio's cheerful creations are crafted with an exotic, toes-in-the-sand spirit that's simultaneously fashion-forward and vintage-inspired."
}
*/