const expressAsyncHandler = require("express-async-handler");

const User = require ('../models/userModel');

const generateToken = require('../config/generateToken')

const registerUser = expressAsyncHandler(async(req , res) => {

    const {name, email, password, pic} = req.body;

    if(!name || !email || !password)
    {
        res.status(400);
        throw new Error("Please Enter all the Fields")
    }

    const userExists = await User.findOne( {email} );//mongoDB query

    if(userExists) {
        res.status(400).json({error: "User Already Exists"});
        //throw new Error("User Already Exists");
    }

    const user = await User.create({// this will query our database and create a new user in case the email doesn't alredy exists
        name,
        email,
        password,
        pic,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }


    else 
    {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});

const authUser = expressAsyncHandler(async (req , res)=> {
    const { email, password} = req.body;

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password)))
    {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }
    else{
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});


module.exports = {registerUser, authUser};
