const express = require("express");
const router = express.Router();

//user model
const User = require("../../models/User");
// const bcrypt = require("bcryptjs");
// const config = require("config");
// const jwt = require("jsonwebtoken");

// @route       POST api/users
// @description Register new user
// @access      Public

router.post("/", (req, res) => {
  res.send("register");
});

module.exports = router;
