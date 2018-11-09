var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequestSchema = new Schema({
  endpoint: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true
  },
  headers: Map,
  cookies: Map,
  scheme: String,
  queryString: String,
  queryParams: Map,
  remoteIP: String,
});

module.exports = mongoose.model('Request', RequestSchema);
