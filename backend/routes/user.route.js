const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {auth} = require("../middlewares/auth.middleware");

const {UserModel} = require("../models/user.model");

const userRouter = express.Router();


userRouter.post("/register",(req,res) => {
    const {password} = req.body;
    
    bcrypt.hash(password, 5, async(err, hash)=>{
        try {
            const newUser = new UserModel({...req.body,password:hash});
            await newUser.save();
            res.status(200).json({msg:"New user has been registered"});
        } catch (error) {
            res.status(400).json({err:error});
        }
    });   
});


userRouter.post("/login",async(req,res)=>{

    const {email,password} = req.body;

  try {
    
    const user = await UserModel.findOne({email:email});

    if (!user) {
        res.status(400).json({msg:"Invalid email or password"});
    }else{
        bcrypt.compare(password, user.password, (err,result)=>{

 
            if(err || !result){

                res.status(400).json({msg:"Invalid email or password"});
                
            }else{
                const token = jwt.sign({userId:user._id,userName:user.name,userRole:user.role},process.env.jwtSecret);
                res.status(200).json({msg:"Login Successful",token:token,user:user.name,userRole:user.role});
            }
        });
    }
    } catch (err) {
        console.error(err);
        res.status(400).json({msg:"Error logging in"});
  }
});

userRouter.get("/all",auth,async(req,res)=>{

    try {
        let users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(400).json({err:error});
    }
})

userRouter.delete("/delete/:id",auth,async(req,res)=>{
    const id = req.params.id;
    try {
        await UserModel.findByIdAndDelete({_id:id});
        res.status(200).json({message:`User with id ${id} has been deleted`});
    } catch (error) {
        console.log(error);
        res.status(400).json({err:error});
    }
})

module.exports = {userRouter};
