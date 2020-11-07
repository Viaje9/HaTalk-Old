// const Chatroom = require('../model/User');
const bcrypt = require('bcrypt');
const User = require('../model/User')
const Chat = require('../model/Chat')
const key = require('../db');
const jwt = require('jsonwebtoken')


class IndexCtrl {
    index(req, res) {
        res.render('index')
    }

    async login(req, response) {
        User.findOne({ account: req.body.account }, (err, res) => {
            if (err) response.json({ success: false })
            if (res !== null) {
                bcrypt.compare(req.body.password, res.password, function (err, result) {
                    console.log(result);
                    if (result) {
                        const token = jwt.sign({ _id: req.body.account }, key.jwt, { expiresIn: '14 day' })
                        response.cookie("Token", token, { httpOnly: true })
                        response.json({ success: true })
                    }
                    else response.json({ success: false })
                });
            }
        })
    }

    async checkAccount(req, res) {
        const account = await User.find({ account: req.query.account })
        res.send(account.length > 0 ? false : true)
    }

    //待優化
    async register(req, res) {
        //加密
        req.body.password = await bcrypt.hash(req.body.password, key.saltRounds)
        //搜索帳號
        const account = await User.find({ account: req.query.account })
        //不要相信前端傳進來的東西(寫驗證)
        //檢查帳號是否重複
        if (account.length <= 0) {
            //新增使用者
            User.create(req.body, (err, user) => {
                if (err) res.send({ success: false })
                //新增token
                const token = jwt.sign({ _id: req.body.account }, key.jwt, { expiresIn: '14 day' })
                res.cookie("Token", token, { httpOnly: true })
                res.json({ success: true })
            })
        } else {
            res.json({ success: false })

        }
    }

    getUser(req, res) {
        //取得好友名單就好
        User.findOne({ account: req.account }).populate('friends').exec(function (err, result) {
            const data = {
                success: true,
                name: result.name,
                account: result.account,
                friends: result.friends.map(e => { return { name: e.name, state: e.state, account: e.account } })
            }
            res.json(data)
        })
    }

    updateUserName(req, res) {
        User.updateOne({ account: req.account }, { name: req.body.name }, (err, result) => {
            if (err) res.send({ success: false })
            res.send({ success: true })
        })
    }

    updateUserState(req, res) {
        User.updateOne({ account: req.account }, { state: req.body.state }, (err, result) => {
            if (err) res.send({ success: false })
            res.send({ success: true })
        })
    }

    searchUser(req, res) {
        /**
         * 可能會有找不到或是其他err狀況
         * 找到自己
         */
        User.findOne({ account: req.query.account }, "account name state", (err, result) => {
            if (err || result === null) res.send({ success: false })
            else {
                const data = {
                    account: result.account,
                    name: result.name,
                    state: result.state
                }
                res.send({ success: true, user: data })
            }
        })
    }

    addFriend(req, res) {
        User.findOne({ account: req.account }).populate('friends').exec(function (err, result) {
            const repeat = result.friends.filter(e => e.account === req.body.account)
            if (repeat.length == 0) {
                if (req.account !== req.body.account) {
                    console.log("check account");
                    const newChat = new Chat()
                    creatFriend(req.account, req.body.account, newChat._id)
                    creatFriend(req.body.account, req.account, newChat._id)
                    newChat.save()
                    res.send({ success: true })
                } else res.send({ success: false })
            } else res.send({ success: false })
        })

        function creatFriend(user, friend, chatId) {
            User.findOne({ account: user }, (err, userRes) => {
                const data = {
                    friends: userRes._id,
                    chatList: {
                        friend: userRes.account,
                        chat: chatId
                    }
                }
                User.updateOne({ account: friend }, { $push: data }).exec()
            })
        }
    }

    // getFriend(req, res) {
    //     User.findOne({ account: req.account }).populate('friends').exec(function (err, result) {
    //         const list = result.friends.map(e => { return { account: e.account, name: e.name, state: e.state } })
    //         res.send({ success: true, list: list })
    //     })
    // }

    async getMsg(req, response) {
        const room = await User.findOne({ account: req.account }, { chatList: { $elemMatch: { friend: req.query.account } } })
        Chat.findOne({ _id: room.chatList[0].chat }, function (err, res) {
            response.json(res.record)
        })
    }

    test(req, res) {
        res.send({ success: true })
    }
}

module.exports = new IndexCtrl();

//可能可以優化