const express = require('express');
const commentRouter = express.Router();

const { loginRequired } = require('../controllers/authController');

router.use(loginRequired)

const { createComment, retrieveComments, deleteComment } = require('../controllers/commentController');

router.post('/:postId', createComment);

router.get('/:postId', retrieveComments);

router.delete('/:commentId', deleteComment);

module.exports = router