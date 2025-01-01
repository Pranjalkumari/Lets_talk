const { Conversation } = require('../models/conversationModel'); // Make sure this path is correct.
const { Message } = require('../models/messageModel');
const { populate } = require('../models/userModel');
 exports.sendMessage = async (req,res) =>{
    try{

        const senderId = req.id; // store in req.id , and middleware wokrs between request and response
        const receiverId = req.params.id;
        const {message} = req.body;


        let gotConversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]}, //all id's find which are store in array
        });
        if(!gotConversation){
            //if no conversation not fond create new conversation
            gotConversation =await Conversation.create({
                participants:[senderId, receiverId]
            })
        };

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            gotConversation.messages.push(newMessage._id);
        };
        await  Promise.all([gotConversation.save(), newMessage.save()]);

        return res.status(201).json({
            message:"message send successfully."
        })
    }catch(error){
        console.log(error)
    }
};

// for receing message
exports.getMessage = async (req, res) => {
    try{
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        }).populate("messages");
        return res.status(200).json(conversation?. messages);

    }catch(error)
    {
        console.log(error);
    }
}

//module.exports = sendMessage ;