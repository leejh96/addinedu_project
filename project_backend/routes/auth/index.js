const express = require("express");
const router = express.Router();
const authsController = require("../../controllers/auths/authsController");

router.post("/signup", authsController.createUser);
router.post("/signin", authsController.signinUser);

module.exports = router;
