exports.signIn = (req,res,next)=>{
	res.render('/html/signIn.html',{title: '登陆'});
};
exports.signUp = (req,res,next)=>{
	res.render('/html/signUp.html',{title: '注册'});
};
exports.index = (req,res,next)=>{
	res.render('/html/index.html',{title: '首页'});
};
exports.articleById = (req,res,next)=>{
	res.render('/html/details.html',{title: '帖子详情'});
};
exports.subject = (req,res,next)=>{
	res.render('/html/topic.html',{title: '话题'});
};
exports.adminFindAll = (req,res,next)=>{
	res.render('/html/backstage.html',{title: '后台'});
};
