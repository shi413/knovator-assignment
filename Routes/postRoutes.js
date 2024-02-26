const express = require('express');
const { createpost, allpost, postUpdate, postDelete } = require('../Controller/postController');
const { verifyToken } = require('../JWTverify');
const postRoutes = express.Router();

postRoutes.post('/createpost',verifyToken,createpost)
postRoutes.get('/allpost',allpost)
postRoutes.post('/postUpdate',verifyToken,postUpdate)
postRoutes.post('/postDelete',verifyToken,postDelete)

module.exports = {postRoutes}