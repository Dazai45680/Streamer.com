var http = require('http')
var Main = require('./server_API/main.js');
console.log("server has started------------------->");
var server = http.createServer(function (req ,res) {
   
    console.log(req.url);
    let main = new Main;
    main.main (req,res);

   
}); 


server.listen(3000);