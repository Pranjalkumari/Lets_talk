const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{timestamps:true});

const Message = mongoose.model("Message",messageModel);

module.exports = {Message};