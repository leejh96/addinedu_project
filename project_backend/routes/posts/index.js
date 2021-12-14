const express = require("express");
const router = express.Router();
const postsController = require("../../controllers/posts/postsController");
const authModule = require("../../modules/authModule");

router.get("/", postsController.readPost);
router.post("/", authModule.loggedIn, postsController.createPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);
router.get("/:id", postsController.readDetailPost);
module.exports = router;
