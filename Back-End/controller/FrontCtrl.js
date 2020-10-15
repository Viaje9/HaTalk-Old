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

    async register(req, res) {
        req.body.password = await bcrypt.hash(req.body.password, key.saltRounds).then(function (hash) {
            return hash
        });
        let account = await User.find({ account: req.query.account })

        if (account.length <= 0) {
            const data = new User(req.body);
            data.save((err, a) => {
                if (err) {
                    res.send({ success: false })
                }
                const token = jwt.sign({ _id: req.body.account }, key.jwt, { expiresIn: '14 day' })
                res.cookie('haTalkToken', token, { expires: new Date(Date.now() + 1209600000) })
                res.send({ success: true })
            })
        } else {
            res.send({ success: false })
        }
    }
}

module.exports = new IndexCtrl();

//可能可以優化