var indexRoute = require('./index.route');
var trapRoute = require('./trap.route');
var requestsRoute = require('./requests.route');

module.exports = function(app) {
  indexRoute(app);
  requestsRoute(app);
  trapRoute(app);
}
