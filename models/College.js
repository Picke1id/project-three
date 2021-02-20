const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  majors: [String]
});


module.exports = College = mongoose.model('colleges', CollegeSchema);