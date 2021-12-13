const express = require("express");
const router = express.Router();
const postsController = require("../../controllers/posts/postsController");

router.get("/", postsController.readPost);
router.post("/", postsController.createPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);
router.get("/:id", postsController.readDetailPost);
module.exports = router;
