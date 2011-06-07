var http = require('http'), faye = require('faye');

var bayeux = new faye.NodeAdapter({
  mount: '/faye',
  timeout: 10
});

// Handle non-Bayeux requests
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello, non-Bayeux request');
  response.end();
});

var port = process.env.PORT || 3000;
bayeux.attach(server);
server.listen(port, function() {
	console.log("Listening on " + port);
});