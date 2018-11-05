function requestLogger(req, res) {
  res.json({
    endpoint: req.originalUrl,
    method: req.method,
  });
}

module.exports = function(app) {
  app.all('/*', requestLogger);
};
