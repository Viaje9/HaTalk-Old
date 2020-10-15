const express = require('express');
const Router = express.Router();
const IndexCtrl = require('../controller/FrontCtrl')


Router.get('/', IndexCtrl.index)
Router.get('/test', IndexCtrl.test)
Router.get('/CheckAccount', IndexCtrl.checkAccount)
Router.post('/Register', IndexCtrl.register)


module.exports = Router;