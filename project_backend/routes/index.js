var express = require("express");
var router = express.Router();

const postsRouter = require("./posts");
const authsRouter = require("./auth");
const usersRouter = require("./users");

router.use("/posts", postsRouter);
router.use("/auth", authsRouter);
router.use("/users", usersRouter);

module.exports = router;
