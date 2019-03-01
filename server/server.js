var http = require('http')
var fs = require('fs')
var cors = require('cors')
var HandlingRequest = require('./Handling_request.js');
var server = http.createServer(function (req ,res) {
    console.log(req.url);
    let HS = new HandlingRequest;
    HS.required_file (req,res)

   
}); 

server.listen(3000);