// const Chatroom = require('../model/User');
const bcrypt = require('bcrypt');
const User = require('../model/User')
const key = require('../db');
const jwt = require('jsonwebtoken')


class IndexCtrl {
    index(req, res) {
        res.render('index')
    }

    async checkAccount(req, res) {
        let account = await User.find({ account: req.query.account })
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
                res.json({ success: true, token: token, account: req.body.account })
            })
        } else {
            res.json({ success: false })
        }
    }

    getUser(req, res) {
        //取得好友名單就好
        User.findOne({ account: req.account }).populate('friends').exec(function (err, result) {
            if (err) res.send({ success: false })
            const data = {
                name: result.name,
                account: result.account,
                friends: result.friends.map(e => { return { name: e.name, state: e.state } })
            }
            res.json(data)
        })
    }

    updateUserName(req, res) {
        User.updateOne({ account: req.account }, { name: req.body.name }, (err, result) => {
            if (err) return handleError(err)
            res.send({ success: true })
        })
    }

    updateUserState(req, res) {
        User.updateOne({ account: req.account }, { name: req.body.state }, (err, result) => {
            if (err) return handleError(err)
            res.send({ success: true })
        })
    }

    test(req, res) {
        res.send({ success: true })
    }
}

module.exports = new IndexCtrl();

//可能可以優化