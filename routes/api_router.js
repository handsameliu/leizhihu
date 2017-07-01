'use strict';

const express = require('express');
const router = express.Router();

const userController = require("../controller/userController");
const articleController = require("../controller/articleController");

router.post('/signIn',userController.signIn);									/*登陆*/
router.post('/signUp',userController.signUp);									/*注册*/
router.get('/findAll',articleController.findAll);								/*查询所有帖子*/
router.get('/findBySubject/:id',articleController.findBySubject);				/*根据类型查询帖子*/
router.get('/findArticleById/:id',articleController.findArticleById);		    /*根据id查询帖子及相关内容*/
router.post('/saveArticle',articleController.saveArticle);						/*添加帖子*/
router.post('/saveComment',articleController.saveComment);						/*添加评论*/
router.get('/findCommentByArticleId/:id',articleController.findCommentByArticleId); /*查询对应评论 */
router.post('/signOut',userController.signOut);                                 /*退出 */
router.post('/search',articleController.search);                                /*搜索 */
router.put('/update',articleController.update);                                 /*修改*/

module.exports = router;
