const express = require('express');
const router = express.Router();

const usersRouter = require("./users.route")
const loginRouter = require("./login.route")
const postsRouter = require("./posts.route")


router.use('/signup', usersRouter)
router.use('/login', loginRouter)
router.use('/posts', postsRouter)


module.exports = router;