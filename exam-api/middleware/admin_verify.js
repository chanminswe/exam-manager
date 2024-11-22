const jwt = require("jsonwebtoken");

const adminVerify = (req, res, next) => {
  const token = req.cookies.authAdminToken;

  if (!token) {
    return res
      .status(400)
      .json({ message: "Cannot accquired token from cookies" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_ADMIN);

  if (!decoded) {
    return res.status(400).json({ message: "Cannot verify or expired cookie" });
  }

  req.user = decoded;
  next();
};

module.exports = adminVerify;
