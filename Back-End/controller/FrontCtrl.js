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
        req.body.password = await bcrypt.hash(req.body.password, key.saltRounds).then(function (hash) {
            return hash
        });
        let account = await User.find({ account: req.query.account })

        //不要相信前端傳進來的東西(寫驗證)
        if (account.length <= 0) {
            const data = new User(req.body);
            data.save((err, a) => {
                if (err) {
                    res.send({ success: false })
                }
                const token = jwt.sign({ _id: req.body.account }, key.jwt, { expiresIn: '14 day' })
                res.send({ success: true, token: token, account:req.body.account})
            })
        } else {
            res.send({ success: false })
        }
    }

    test(req, res) {
        res.send({ success: true })
    }
}

module.exports = new IndexCtrl();

//可能可以優化