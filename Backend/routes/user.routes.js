const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
// const { authUser } = require("../middlewares/auth.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

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
  ],
  userController.registerUser
);
router.post(
  `/login`,
  [
    body("email").isEmail().withMessage("Invalid Email!"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters Long!"),
  ],
  userController.loginUser
);

// router.get(`/profile`, authUser, userController.getUserProfile);
router.get(`/profile`, authMiddleware.authUser, userController.getUserProfile);
router.get(`/logout`, authMiddleware.authUser, userController.logoutUser);

module.exports = router;
