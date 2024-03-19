const mongoose = require("mongoose");

const chatModel = mongoose.Schema({
    chatName: {type: String, trim: true},
    isGroupChat: {type: Boolean, default: false},

    user: [{
        type: mongoose.Schema.Types.ObjectaId, ref:  'User'
    }],
    latestMesaage: {type: mongoose.Schema.Types.ObjectaId, ref: 'Message'},
    groupAdmin: { type: mongoose.Schema.Types.ObjectaId, ref: 'User'}
},
{
    timeStamps :  true
}
)

const chat = mongoose.model("Chat", chatModel)
module.exports = chat;