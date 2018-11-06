// grab request model
var Request = require("../models/request.model");

module.exports = function(app) {
  app.all('/*', function(req, res) {

    // create new request
    var newRequest = new Request({
      endpoint: req.originalUrl,
      method: req.method,
      created_at: new Date(),
    });

    // save the request
    newRequest.save(function(err, request) {
      if (err) res.send(err);
      res.json(request);
    });
  });
};
