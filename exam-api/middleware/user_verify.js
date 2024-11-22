const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const token = req.cookies.authUserToken;

  if (!token) {
    return res
      .status(400)
      .json({ message: `User Token not verified or expired` });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_USER);

  if (!decoded) {
    return res.status(400).json({ message: "Invalid or Expired Token" });
  }

  req.username = decoded;

  return next();
};

module.exports = verify;
