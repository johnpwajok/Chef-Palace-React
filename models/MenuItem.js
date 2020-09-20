const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const MenuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: {
    type: [String],
    required: true,
    unique: false,
  },
  category: {
    type: String,
    required: true,
    unique: false,
  },
  glutenFree: {
    type: Boolean,
    required: true,
    unique: false,
  },
  vegan: {
    type: Boolean,
    required: true,
    unique: false,
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  itemImage: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = MenuItem = mongoose.model("menuItem", MenuItemSchema);
