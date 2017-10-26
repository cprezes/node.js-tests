var m2 = require('./2module');

m2("some text " );

//you need to install (-g global) 
// npm install -g express-generator




var http= require('http');

var server = http.createServer(function(request,response){
console.log( request);
response.write('hi');
response.end(); 
});

server.listen(3000); 