var http = require('http'), faye = require('faye');

var server = http.createServer(function(req, res) {
});

var bayeux = new faye.NodeAdapter({mount: '/bayeux'});
bayeux.attach(server);
// var port = process.env.PORT || 3000;
server.listen(8000);
