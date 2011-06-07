var http = require('http'), faye = require('faye');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello, non-Bayeux request');
  response.end();
});

var bayeux = new faye.NodeAdapter({mount: '/faye'});
bayeux.attach(server);
var port = process.env.PORT || 3000;
server.listen(port);
