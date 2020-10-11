// const Chatroom = require('../model/User');

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


}

module.exports = new IndexCtrl();

//可能可以優化