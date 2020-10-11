const mongoose = require('mongoose');
const key = require('./db');

let Chatroom = new mongoose.Schema({
    id: Number,
    context: Array,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const c = mongoose.model('Chatroom', Chatroom);

const a = new c({
    id: 1,
    context: [
        {
            user: "apple",
            text: "hello"
        },
        {
            user: "banana",
            text: "hey"
        }
    ]
});

mongoose.connect(key, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
    
// });

a.save((err, a) => {
    if (err) {
        return console.log(err);
    }
})