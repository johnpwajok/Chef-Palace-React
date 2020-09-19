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
  },
  category: {
    type: String,
    required: true,
  },
  glutenFree: {
    type: Boolean,
    required: true,
  },
  vegan: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
});

module.exports = MenuItem = mongoose.model("menuItem", MenuItemSchema);
