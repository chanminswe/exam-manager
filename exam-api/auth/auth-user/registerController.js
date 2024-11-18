const registerUser = (req, res) => {
  const { username, password, batchNumber } = req.body;
  console.log(req.body);

  return res.status(201).json({ message: "registered user sucessfully!" });
};

module.exports = registerUser;
