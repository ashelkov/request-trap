var mongoose = require("mongoose");
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
});

module.exports = mongoose.model("Request", RequestSchema);
