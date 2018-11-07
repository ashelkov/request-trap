// grab request model
var Request = require("../models/request.model");

module.exports = function(app) {
  app.route('/:trap_id/requests')
    .get(function(req, res) {
      const endpoint = req.params.trap_id;
      
      // find requests by endpoint
      Request.find({ endpoint })
        .sort({ created_at: 'desc' })
        .exec(function(err, requests) {
          if (err) res.send(err);
          
          // res.json(requests);
          res.render('requests', {
            title: 'Requests log',
            endpoint,
            requests,
          });
        });
    });
};
