/*auth for private routes to be used to add and remove items from the chef palace menu, 
and to add and remove items to the basket

    ***To be configured to ensure admin is logged in to allow access for setting menu items***
*/

const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //check for token
  if (!token) {
    return res.status(401).json({
      msg: "You are unauthorized to access this page without being logged in",
    });
  }

  try {
    //else verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //add user from the payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is invalid!" });
  }
}

module.exports = auth;
