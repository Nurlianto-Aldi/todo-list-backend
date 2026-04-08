const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({
      message: "Access denied! You are not login."
    });
  }
  
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).json({
      message: "Token invalid or may be expired."
    });
  }
}

module.exports = authenticateToken;