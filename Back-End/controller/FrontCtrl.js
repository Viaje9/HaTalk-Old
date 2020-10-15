// const Chatroom = require('../model/User');
const User = require('../model/User')

class IndexCtrl {


    index(req, res) {
        res.render('index')
    }

    test(req, res) {
        const data = new Chatroom({
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

        data.save((err, a) => {
            if (err) {
                return console.log(err);
            }
            console.log('test1');
        })
        res.send('test')
    }

    async checkAccount(req, res) {
        let a = await User.find({ account: req.query.account })
        if (a) {
            console.log(a);
        }
        res.send('test')
    }

    register(req, res) {

        res.redirect('/#/')
    }
}

module.exports = new IndexCtrl();

//可能可以優化