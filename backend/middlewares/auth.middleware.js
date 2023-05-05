require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
      console.log(decoded);
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }
      if (decoded.userRole !== "admin") {
        return res.status(401).json({ error: "Unauthorized access" });
      }
      next();
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { auth };
