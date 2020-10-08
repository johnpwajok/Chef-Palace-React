const express = require("express");
const router = express.Router();
//add auth to add or delete elements
const auth = require("../../middleware/auth");
//cart model
const Cart = require("../../models/Cart");

//get cart items
// @route       GET api/cart
// @description Get all cart items
// @access      Public
router.get("/:user", (req, res) => {
  Cart.findOne({ user: req.params.user }).then((carts) => res.json(carts));
});

//add items to cart
// @route       POST api/cart
// @description Create a new cart item
// @access      Private

//will create a new cart item using the name supplied from the body of the json request then save it to the database
router.post("/", auth, (req, res) => {
  const user = req.body.user;
  const newCartItem = {
    menuItemKey: req.body.menuItemKey,
    quantity: req.body.quantity,
  };
  //o
  //save new item and return copy of the new item as the response
  // newMenuItem.save().then((menuItem) => res.json(menuItem));
  //find cart for specified user
  Cart.findOne({ user: user }).then((cartExists) => {
    if (cartExists) {
      let menuItems = cartExists.items.map(
        (newCartItem) => newCartItem.menuItemKey + ""
      );
      //if same item already exists in the cart just update the entry
      if (menuItems.includes(newCartItem.menuItemKey)) {
        Cart.findOneAndUpdate(
          {
            user: user,
            items: {
              $elemMatch: { menuItemKey: newCartItem.menuItemKey },
            },
          },
          {
            $inc: { "items.$.quantity": newCartItem.quantity },
          }
        )
          .exec()
          .then(() => res.json(newCartItem));
      } else {
        //if the element is new then add it to the users cart
        cartExists.items.push(newCartItem);
        cartExists.save().then(() => res.json(newCartItem));
      }
    } else {
      //create new entry
      Cart.create({
        user: user,
        items: [newCartItem],
      }).then(() => res.json(newCartItem));
    }
  });
});

//delete
// @route       DELETE api/cart/:id
// @description Delete a cart item
// @access      Private
router.delete("/:id", auth, (req, res) => {
  Cart.findById(req.params.id)
    .then((cart) => cart.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
  // .then(() => res.end())
  // .catch((err) => res.send(err));
});

module.exports = router;
