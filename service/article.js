let db = require('../db');
let {message} = require('../helper');
let articleService = db.Article;
let commentService = db.Comment;
/**
 * 查询所有
 */
exports.findAll = (req,res) => {
    let query = req.query;
    articleService.find({user:query.user}).exec((err,data) => {
        if(err){
            return message('params invalid');
        }
        if(!data){
            return message('data is null');
        }
        res.json(message(null,data,'success'));
    });
};
/**
 * 按话题分类查找
 */
exports.findBySubject = (req,res) => {
    let query = req.query;
    articleService.find({subject:query.subject}).exec((err,data) => {
        if(err){
            return message('params invalid');
        }
        if(!data){
            return message('data is null');
        }
        res.json(message(null,data,'success'));
    });
};
/**
 * 按id查询帖子
 */
exports.findArticleById = (req,res) => {
    let query = req.query;
    articleService.findOne({user:query.id}).exec((err,data) => {
        if(err){
            return message('params invalid');
        }
        if(!data){
            return message('data is null');
        }
        res.json(message(null,data,'success'));
    });
};
/**
 * 保存帖子
 */
exports.saveArticle = (req,res) => {
    let body = req.body;
     if (!body || !(body.title && body.content && body.subject && body.user)) {
        res.json(message('params invalid'));
        return;
    }
    articleService.create(body,(err,data) => {
        if(err){
            return res.json(message('error',err));
        }
        res.json(message(null,data,'success'));
    });
};
/**
 * 保存评论
 */
exports.saveComment = (req,res) => {
    let body = req.body;
     if (!body || !(body.article && body.content && body.user)) {
        res.json(message('params invalid'));
        return;
    }
    commentService.create(body,(err,data) => {
        if(err){
            return res.json(message('error',err));
        }
        res.json(message(null,data,'success'));
    });
};