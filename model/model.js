const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const apiModel = mongoose.model("api", apiSchema);

module.exports = apiModel;
