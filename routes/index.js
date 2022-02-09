var express = require('express');
const app = require('../app');
var router = express.Router();
let indexController = require('../controller/index')

/* GET home page. */

router.get('/', indexController.create);

module.exports = router;
