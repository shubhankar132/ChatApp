const mongoose = require("mongoose");

const messageModel = mongoose.Schema({
    sender : {type: mongoose.Schema.Types.ObjectaId, ref: 'User'},
    content: {type: String, trim: true},
    chat: mongoose.Schema.Types.ObjectaId, ref: 'Chat'
},
{
    timeStamps: true
})

const Message = mongoose.model("Chat", chatModel)

module.exports.Message;

