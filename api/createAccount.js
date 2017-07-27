var config = require('config');
var Web3_extended = require('web3_extended');
var Web3 = require('web3');
var rpcConfig = config.get('rpc');
var nukoHost = 'http://10.0.0.8:8293'

var options = {
    // host 
    host: nukoHost,
    //ipc: true,
    personal: true,
    admin: true,
    debug: false
};

var web3_extended = Web3_extended.create(options);
//var nukoHost = 'http://10.0.0.8:8293'
const web3 = new Web3(new Web3.providers.HttpProvider(nukoHost))
var errorMessage = "";

module.exports = {
    create: function (req, res, next) {
       console.log(web3_extended.admin.datadir()); 
       web3_extended.personal.newAccount("test", function (error, result) {
            if (!error) {
                console.log(result);
             }
             else {
                console.log(error);
             }
        });
    }
} 
 
           
