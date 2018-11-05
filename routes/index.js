var indexRoutes = require('./index.route');
var trapRoutes = require('./trap.route');
var trapRequestsRoute = require('./trapRequests.route');

module.exports = function(app) {
  indexRoutes(app);
  trapRequestsRoute(app);
  trapRoutes(app);
}
