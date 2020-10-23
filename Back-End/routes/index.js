const express = require('express');
const Router = express.Router();
const IndexCtrl = require('../controller/FrontCtrl')
const Auth = require('../auth/token')

const jwt = require('jsonwebtoken')
const key = require('../db');

Router.get('/', IndexCtrl.index)
Router.get('/CheckAccount', IndexCtrl.checkAccount)
Router.post('/Register', IndexCtrl.register)
Router.get('/GetUser',Auth, IndexCtrl.getUser)
// Router.get('/test',Auth, IndexCtrl.test)


module.exports = Router;