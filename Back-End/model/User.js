const mongoose = require('mongoose');

let Chatroom = new mongoose.Schema({
    id: Number,
    context: Array,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Chatroom', Chatroom);