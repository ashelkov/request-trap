// grab request model
var Request = require("../models/request.model");

module.exports = function(app) {
  app.route('/*/requests')
    .get(function(req, res) {
      const endpoint = req.originalUrl.slice(0, req.originalUrl.indexOf('/requests'));
      
      // find requests by endpoint
      Request.find({ endpoint })
        .sort({ created_at: 'desc' })
        .exec(function(err, requests) {
          if (err) res.send(err);
          res.json(requests);
        });
    });
};
