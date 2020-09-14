const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//user model
const User = require("../../models/User");

const config = require("config");
const jwt = require("jsonwebtoken");

// @route       POST api/users
// @description Register new user
// @access      Public

router.post("/", (req, res) => {
  const { name, email, password, phone, deliveryAddress } = req.body;

  //validate info
  if (!name || !email || !password || !phone || !deliveryAddress) {
    return res.status(400).json({ msg: "All fields need to be filled!" });
  }

  //check if user already exists
  User.findOne({ email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ msg: "Account with this email already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      phone,
      deliveryAddress,
    });

    //create salt and hash for password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
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
  });
});

module.exports = router;
