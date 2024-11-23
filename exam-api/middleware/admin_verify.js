const jwt = require("jsonwebtoken");

const adminVerify = (req, res, next) => {
  try {
    const token = req.cookies.authAdminToken;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token not found in cookies." });
    }

    // Verify the token using the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ADMIN);

    // Attach decoded data to the request object for further use
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Invalid token signature or malformed token." });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired." });
    } else {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
};

module.exports = adminVerify;
