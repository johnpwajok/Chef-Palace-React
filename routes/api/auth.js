const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//user model
const User = require("../../models/User");

const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// @route       POST api/auth
// @description Authenticate a registered user
// @access      Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //validate info
  if (!email || !password) {
    return res.status(400).json({ msg: "All fields need to be filled!" });
  }

  //check if user already exists
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: "User doesn't exist" });
    }

    //validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ msg: "Credentials not valid!" });
      }

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone,
              deliveryAddress: user.deliveryAddress,
            },
          });
        }
      );
    });
  });
});

// @route       GET api/auth/user
// @description Get user data
// @access      Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
