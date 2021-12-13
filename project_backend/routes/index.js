var express = require("express");
var router = express.Router();

const postsRouter = require("./posts");
const authsRouter = require("./auth");
router.use("/posts", postsRouter);
router.use("/auth", authsRouter);

module.exports = router;
