const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, fullname, password, vehicle } = req.body;

  const captainExists = await captainModel.findOne({ email });
  if (captainExists) {
    return res.status(400).json({ message: "Captain Already Exists!" });
  }

  const hashedPassword = await captainModel.hashPassword(password);
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    type: vehicle.type,
  });
  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(201).json({ token, captain });
};

// module.exports.deleteCaptain = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const captain = await captainModel.findOneAndDelete({ email });
//     if (!captain) {
//       return res.status(404).json({ message: "Captain not found!" });
//     }
//     res.status(200).json({ message: "Captain deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };
