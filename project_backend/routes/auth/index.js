const express = require("express");
const router = express.Router();
const authsController = require("../../controllers/auth/authController");
//회원가입
router.post("/signup", authsController.signup);
//로그인
router.post("/signin", authsController.signin);

module.exports = router;
