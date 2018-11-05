module.exports = function(app) {
  app.route('/*/requests')
    .get(function(req, res) {
      const endpoint = req.originalUrl.slice(0, req.originalUrl.indexOf('/requests'));
      res.send(`requests on: ${endpoint}`);
    });
};
