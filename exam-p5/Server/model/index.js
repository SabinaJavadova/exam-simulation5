const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  img: String,
  name: String,
  price: Number
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
