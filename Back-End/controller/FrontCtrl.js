// const Chatroom = require('../model/User');
const bcrypt = require('bcrypt');
const User = require('../model/User')
const Friend = require('../model/Friend')
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
        req.body.password = await bcrypt.hash(req.body.password, key.saltRounds).then(function (hash) {
            return hash
        });
        const account = await User.find({ account: req.query.account })
        console.log(account);
        //不要相信前端傳進來的東西(寫驗證)
        if (account.length <= 0) {
            //新增使用者
            const setUser = new User(req.body);
            await setUser.save((err, a) => {
                if (err) {
                    res.send({ success: false })
                }
            })
            const token = jwt.sign({ _id: req.body.account }, key.jwt, { expiresIn: '14 day' })
            const setFriend = new Friend({ account: req.body.account })

            //新增使用者好友名單
            await setFriend.save((err, a) => {
                if (err) {
                    res.send({ success: false })
                }
                res.json({ success: true, token: token, account: req.body.account })
            })

            
        } else {
            res.json({ success: false })
        }
    }

    async getUser(req, res) {
        const account = jwt.verify(req.header('Token'), key.jwt)._id
        //取得好友名單就好
        Friend.findOne({ account: account }, (err, a) => {
            if (err) {
                res.json(err)
            }
            res.json(a)
        })
    }

    test(req, res) {
        res.send({ success: true })
    }
}

module.exports = new IndexCtrl();

//可能可以優化