var server = require('./app.js');

var port;
port = process.env.PORT || 3000
server.listen(port, function() {
  console.log('server listen on port: ' + port);
});
