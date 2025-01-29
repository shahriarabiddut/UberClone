const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");

router.post(
  `/register`,
  [
    body("email").isEmail().withMessage("Invalid Email!"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 3 characters!"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters Long!"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters!"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters!"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be at least 1 characters!"),
    body("vehicle.type")
      .isIn(["car", "motorcycle", "cng"])
      .withMessage("Invalid Vehicle Type!"),
  ],
  captainController.registerCaptain
);
// router.delete(`/delete/:id`, captainController.deleteCaptain);

module.exports = router;
