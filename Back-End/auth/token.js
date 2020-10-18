const jwt = require('jsonwebtoken')
const key = require('../db');

module.exports = function (req, res, next) {
    try {
        jwt.verify(req.header('Token'), key.jwt)
        next()
    } catch {
        res.send({ success: false })
    }    
}

