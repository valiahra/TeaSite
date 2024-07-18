const router = require('express').Router();
const authRouter = require('./auth.api.router');
const tokenRouter = require('./token.api.router');
const teaRouter = require('./tea.api.router');
const commentRouter = require('./comment.api.router');

router.use('/tokens', tokenRouter);
router.use('/auth', authRouter);
router.use('/tea', teaRouter);
router.use('/comments', commentRouter);

module.exports = router;
