const express = require('express');
const router = express.Router();
const IndexCtrl = require('../controller/FrontCtrl')


router.get('/', IndexCtrl.index)
router.get('/test', IndexCtrl.test)
// router.get('/test1', IndexCtrl.test1)


module.exports = router;