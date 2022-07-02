var http = require('http');

  http.createServer(function (req, res) {

      res.write("Roixd was here?");

      res.end();

  }) .listen(8080)  

