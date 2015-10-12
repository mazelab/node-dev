var path, serveStatic, env;

serveStatic = require("serve-static");

path = require("path");
env = process.env.NODE_ENV || "development";

model = function(app) {

  // serve static content
  app.use(serveStatic(path.join(__dirname, "public")));

  // define your routes
  app.get('/hello', function(req, res, next) {
    res.send('Hello World from route');
  });

};

module.exports = model;