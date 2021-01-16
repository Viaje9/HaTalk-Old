const express = require('express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const history = require('connect-history-api-fallback');
const cookie = require('cookie');
const cookieParser = require('cookie-parser')
const index = require('./routes/index');
const path = require('path');
const app = express()
const key = require('./db');
const { log } = require('console');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const User = require('./model/User')
const Chat = require('./model/Chat')

mongoose.connect(key.db, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(history())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(index);


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        const data = {
            user: socket.account,
            text: msg,
            time: Date.now()
        }
        Chat.updateOne({ _id: socket.room }, { $push: { record: data } }).exec()
        io.to(socket.room).emit('chat message', data);
    });

    socket.on('bind room', async (msg) => {
        console.log('test');
        const cookies = cookie.parse(socket.handshake.headers.cookie)
        if (cookies.Token) {
            socket.account = jwt.verify(cookies.Token, key.jwt)._id
            const room = await User.findOne({ account: socket.account }, { chatList: { $elemMatch: { friend: msg } } })
            socket.room = room.chatList[0].chat
            socket.friend = msg
            socket.join(socket.room)
        }
    });
});

http.listen(process.env.PORT || 8080, () => {
    console.log('listening on *:', process.env.PORT || 8080);
});















/***
 * 提供靜態檔案
 * 導入VUE
 * 登入驗證
 *
 *
 *
 ***/