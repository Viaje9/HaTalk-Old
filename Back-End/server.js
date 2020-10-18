const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const index = require('./routes/index');
const path = require('path');
const app = express()
const key = require('./db');

mongoose.connect(key.db, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(index);

app.listen(80, console.log('Server running'))
mongoose.connection.once('open', () => { console.log('DB running') });

/** 
 * 設定一個給ws的port
 * **/

const SocketServer = require('ws').Server
const server = app.listen(3000, console.log('ws running'))
const wss = new SocketServer({ server: server, path: "/ws" })

wss.on('connection', ws => {
    console.log('Client connected')
    // if (ws.id) {
    //     console.log(ws.id);
    // } else {
    //     console.log("don't have ID");
    // }
    ws.on('message', data => {
        let clients = wss.clients
        let msg = JSON.parse(data);
        clients.forEach(client => {
            client.send(data)
            console.log(data);
            // if (data.id == client.id) {
            //     client.send(data)
            // }
        })
    })
    ws.on('close', () => {
        console.log('Close connected')
    })
})


wss.getUniqueID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
};

















/***
 * 提供靜態檔案
 * 導入VUE
 * 登入驗證
 *
 *
 *
 ***/