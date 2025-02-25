const mongoose = require('mongoose');

// concept of chat app - reciever and sender
const userModel = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true

    },
    profilePhoto: {
        type: String,
        default:" "

    },
    gender:{
        type: String,
        enum : ["male", "female"],
        require: true
    }

},{timestamps:true});

const User = mongoose.model("User", userModel);

module.exports = User;