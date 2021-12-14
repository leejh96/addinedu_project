const express = require("express");
const router = express.Router();
const { getUserInfo } = require("../../controllers/users/usersController");
const { loggedIn } = require("../../modules/authModule");

//계정정보 가져오기
router.get("/", loggedIn, getUserInfo);

module.exports = router;
