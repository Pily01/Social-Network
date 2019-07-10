////////////////////////
//      U S E R S     //
////////////////////////

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route    POST api/users
// @desc     Register User
// @access   Public
router.post(
  "/",
  // Validation
  [
    check("name", "Error: Name is required")
      .not()
      .isEmpty(),
    check("email", "Error: Please include a valid email").isEmail(),
    check(
      "password",
      "Error: Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User Route");
  }
);

module.exports = router;
