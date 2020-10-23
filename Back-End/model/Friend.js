const mongoose = require('mongoose');


module.exports = mongoose.model('Friend', new mongoose.Schema({
    account: {
        type: String,
        required: true
    },
    friends: [{
        account: String,
        chatroom: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
}));