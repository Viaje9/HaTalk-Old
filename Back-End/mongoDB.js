const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const key = require('./db');
const User = require('./model/User');
const Friend = require('./model/Friend');
const Chatroom = require('./model/Chatroom');

mongoose.connect(key.db, { useNewUrlParser: true, useUnifiedTopology: true });

const userData1 = {
    account: "Account1",
    name: "nick",
    password: "*******"
}

const userData2 = {
    account: "Account2",
    name: "jack",
    password: "*******"
}

const userData3 = {
    account: "Account3",
    name: "Danny",
    password: "*******"
}


function fun1() {
    User.create(userData1, (err, user) => {
        if (err) return handleError(err)
        console.log("create User1 OK");
    })
}

function fun2() {
    User.create(userData2, (err, user) => {
        if (err) return handleError(err)
        console.log("create User2 OK");
    })
}

function fun3() {
    User.create(userData3, (err, user) => {
        if (err) return handleError(err)
        console.log("create User3 OK");
    })
}

// fun1()
// fun2()
// fun3()



/**新增好友 */
// const userAccount = "Account1"
// const friendAccount = "Account2"
// User.findOne({ account: userAccount }, (err, res) => {
//     User.updateOne({ account: friendAccount }, { $push: { friends: res._id } }, (err, res) => {
//         if (err) return handleError(err)
//         console.log("ok");
//     })
// })

/**搜索好友清單 */
// const userAccount = "Account1"
// User.findOne({ account: userAccount }).populate('friends').exec(function (err, res) {
//     const list = res.friends.map(e => { return {account:e.account,name:e.name,state:e.state} })
//     console.log(list);
// })

/**刪除好友 */
// const userAccount = "Account1"
// const friendAccount = "Account2"
// User.findOne({ account: friendAccount }, (err, friend) => {
//     if (err) return handleError(err)
//     User.updateOne({ account: userAccount }, { $pull: { friends:  friend._id} }, (err, res) => {
//         if (err) return handleError(err)
//         console.log("ok");
//     })
// })




