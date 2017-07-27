
var express = require('express');
var router = express.Router();

// API dependency
var createAccount = require('../api/createAccount');
//var unlockAccount = require('../api/unlockAccount');
//var nukoTransfer = require('../api/nukoTransfer');
//var nukoBalance = require('../api/nukoBalance');

// Test dependency
//var test = require('../api/test');


// Routes
//router.post('/balance/', balance.getBalance);
//router.post('/unlockAccount', unlockAccount.unlock);
router.get('/account/create', createAccount.create);
//router.post('/nukoBalance', nukoBalance.balance);


module.exports = router;
