// grab request model
var Request = require("../models/request.model");

module.exports = function(app) {
  app.all('/:trap_id', function(req, res) {

    // create new request
    var newRequest = new Request({
      endpoint: req.params.trap_id,
      method: req.method,
      created_at: new Date(),
      headers: req.headers,
      queryString: req._parsedUrl.search,
      queryParams: req.query,
      scheme: req.protocol,
      remoteIP: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      cookies: Object.keys(req.cookies).length ? req.cookies : undefined,
    });

    // save the request
    newRequest.save(function(err, request) {
      if (err) res.send(err);
      app.get('io').emit('new_request', request);      
      res.json(request);
    });

  });
};
