const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (!fullname || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "Username already exists. Try a different one." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        await User.create({
            fullname,
            username,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
};



const login  =async (req, res)=>
{
  try{
    const{username, password}= req.body;
    if(!username || !password)
    {
        return res.status(400).json({message: "All feilds are required"});
    };
    const user =await User.findOne({username});
    if(!user){
        return res.status(400).json({
            message: "Incorrect username or password",
            success: false
        })
    };
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        return res.status(400).json({
            message: "Incorrect username or password",
            success: false
            
        })
    };
    const tokenData={
      userId :user._id
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY || 'default_secret_key', {expiresIn:'1d'});
    //store in your browerser cookie
    return res.status(200).cookie("token", token, {
        maxAge: 1*24*60*60*1000,
         httpOnly:true,
        //   sameSite: 'strict'
        sameSite: 'strict',
            secure: false
        }).json({
        _id: user._id,
        username:user.username,
        fullname:user.fullname,
        profilePhoto:user.profilePhoto
    });

  } catch(error){
    console.log(error);
  }
}
const logout =(req, res)=>{
    try{
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            messgae:"logged out successfully."
        })
    }catch(error){
        console.log(error);
    }
}

const getOtherUsers = async (req, res)=>{
    try{
        const loggedInUserId = req.id;
        //find loggedin id
        const otherUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password");  //operator of mongodb &ne(not equal to): id not should be the loggedin id , id's which are store in database   and dont wanna show the password
        return res.status(200).json(otherUsers);
    }catch(error){
        console.log("error");
    }
}

module.exports = { register , login, logout, getOtherUsers};


