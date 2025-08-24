import User from "../models/userModal.js";
import bcrypt from "bcrypt"

export const signup = async (req, res) =>{
    try {
        const {name, email, password } = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message : "User already exists"});
        } 
        const hashPassword = await bcrypt.hash(password, 10)
        const createdUser = new User({
            name : name,
            email : email,
            password : hashPassword
        })
        await createdUser.save();
        res.status(201).json({message : "User Created Successfully",user:{
            _id : createdUser._id,
            name : createdUser.name,
            email : createdUser.email
        }})
    } catch (error) {
        console.log("Error: ",  error.message)
        res.status(500).json({message : "Internal Server Error"})
    }
}

export const login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password)

        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid username or password"});
        }
        else{
            res.status(200).json({message: "Login Successful", user:{
                _id:user._id,
                name : user.name,
                email : user.email
            }})
        }
    } catch (error) {
        console.log("Error: ", + error.message);
        res.status(500).json({message : "Internal server error"})
    }
}