let db = require('../db');
let {message} = require('../helper');
let userService = db.User;
let articleService = db.Article;
let commentService = db.Comment;

/**
 * 登陆
 */
exports.signIn = (req,res) => {
    let body = req.body;
    if (!body || !(body.username && body.password)) {
        res.json(message('params invalid'));
        return;
    }
    userService.findOne({username:body.username,password:body.password}).exec((err,data) => {
        if(err){
            return res.json(message(err));
        }
        if (!data) {
            return res.json(message('username && password invalid'));
        }
        res.json(message(null,{data},'success'));
    });
};

/**
 * 注册
 */
exports.signUp = (req,res) => {
    let body = req.body;
    if (!body || !(body.username && body.password)) {
        res.json(message('params invalid'));
        return;
    }
    userService.create(body,(err,data) => {
        if(err){
            return res.json(message('signUp error',err));
        }
        res.json(message(null,data,'success'));
    });
};
