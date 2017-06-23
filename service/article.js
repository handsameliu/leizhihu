'use strict';

let {db} = require('../db');
let {message} = require('../helper');
let articleService = db.Article;
let commentService = db.Comment;
/**
 * 查询所有
 */
exports.findAll = (req,res) => {
    articleService.find({isStatus:0}).populate('user').exec((err,data) => {
        if(err){
            return message('params invalid');
        }
        if(!data){
            return message('data is null');
        }
        res.json(message(null,{error_code:0,message:'success',result:data}));
    });
};
/**
 * 按话题分类查找
 */
exports.findBySubject = (req,res) => {
    let query = req.params;
    articleService.find({subject:query.id,isStatus:0}).populate('user').exec((err,data) => {
        if(err){
            return message('params invalid');
        }
        if(!data){
            return message('data is null');
        }
        res.json(message(null,{error_code:0,message:'success',result:data}));
    });
};
/**
 * 按id查询帖子
 */
exports.findArticleById = (req,res) => {
    let query = req.params;
    articleService.findOne({_id:query.id,isStatus:0}).populate('user').exec((err,data) => {
        if(err){
            return message('params invalid');
        }
        if(!data){
            return message('data is null');
        }
        res.json(message(null,{error_code:0,message:'success',result:data}));
    });
};
/**
 * 保存帖子
 */
exports.saveArticle = (req,res) => {
    let body = req.body;
    let userId = req.session.user && req.session.user._id;
    if(!userId){
        return res.json(message('user invalid'));
    }
    body.user = userId;
    console.log(body);
     if (!body || !(body.title && body.content && body.subject && body.user)) {
        res.json(message('params invalid'));
        return;
    }
    articleService.create(body,(err,data) => {
        if(err){
            return res.json(message('error',err));
        }
        res.json(message(null,{error_code:0,message:'success',result:data}));
    });
};
/**
 * 保存评论
 */
exports.saveComment = (req,res) => {
    let body = req.body;
    let userId = req.session.user && req.session.user._id;
    if(!userId){
        return res.json(message('user invalid'));
    }
    body.user = userId;
    console.log(body);
    if (!body || !(body.article && body.content && body.user)) {
        res.json(message('params invalid'));
        return;
    }
    commentService.create(body,(err,data) => {
        if(err){
            return res.json(message('error',err));
        }
        commentService.findById(data._id).populate('user').exec((err,result) => {
            if(err){
                res.json(message('params invalid'));
                return;
            }
            res.json(message(null,{error_code:0,result:result,message:'success'}));
        });
    });
};
/**
 * 按文章id查询对应评论
 */
exports.findCommentByArticleId = (req,res) => {
    let id = req.params.id;
    if(!id){
        res.json(message('params invalid'));
        return ;
    }
    commentService.find({isStatus:0,article:id}).populate('user').exec((err,data) => {
        if(err){
            return res.json(message('error',err));
        }
        res.json(message(null,{message:'success',result:data}));
    })
};