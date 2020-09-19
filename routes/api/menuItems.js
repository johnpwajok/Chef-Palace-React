const express = require("express");
const router = express.Router();
//add auth to add or delete elements
const auth = require("../../middleware/auth");
//menu item model
const MenuItem = require("../../models/MenuItem");
const multer = require("multer");

//////////////////////////////////////////////////////////
//set consts for image uploads
//code from AceMind on Youtube:  https://github.com/academind/node-restful-api-tutorial/blob/09-image-upload/api/routes/products.js

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

// @route       GET api/items
// @description Get all items
// @access      Public

router.get("/", (req, res) => {
  MenuItem.find().then((menuItems) => res.json(menuItems));
});

// @route       POST api/menuItems
// @description Create a new menu item
// @access      Private

//will create a new MenuItem using the name supplied from the body of the json request then save it to the database
router.post("/", auth, upload.single("itemImage"), (req, res) => {
  const newMenuItem = new MenuItem({
    name: req.body.name,
    ingredients: req.body.ingredients,
    category: req.body.category,
    glutenFree: req.body.glutenFree,
    vegan: req.body.vegan,
    price: req.body.price,
    itemImage: req.file.path,
  });
  //o
  //save new item and return copy of the new item as the response
  newMenuItem.save().then((menuItem) => res.json(menuItem));
});

// @route       DELETE api/menuItems/:id
// @description Delete a menu item
// @access      Private

//deleting menu items using the id eg. (http://localhost:5000/api/menuItems/idOfItem)
//will remove the menu item and return success: true if successful and false id failed or item doesn't exist
router.delete("/:id", auth, (req, res) => {
  MenuItem.findById(req.params.id)
    .then((menuItem) =>
      menuItem.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
