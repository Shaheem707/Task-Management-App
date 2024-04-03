const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  try {
    const token = req.header.authorization;
    if (token) {
        console.log(token);
    } else {
      return res.status(401).json({ error: "Unauthorized user" });
    }
  } catch (error) {
    res.status(401).json({ error: "Unauthorized User" });
  }
};

module.exports = auth;