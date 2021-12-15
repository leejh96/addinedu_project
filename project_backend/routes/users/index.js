const express = require("express");
const router = express.Router();
const {
  getUserInfo,
  uploadImage,
} = require("../../controllers/users/usersController");
const { loggedIn } = require("../../modules/authModule");
const upload = require("../../modules/awsUpload");

//계정정보 가져오기
router.get("/", loggedIn, getUserInfo);

//이미지 저장
router.post("/images", upload.single("img"), uploadImage);
module.exports = router;
