const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const CartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  items: [
    {
      menuItemKey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menuItem",
      },

      quantity: Number,
    },
  ],
});

module.exports = Cart = mongoose.model("cart", CartSchema);
