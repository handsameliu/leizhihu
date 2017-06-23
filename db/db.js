'use strict';

const mongoose = require('mongoose');
let settings = require('../settings');

module.exports = ()=>{
	mongoose.Promise = Promise;
	const Schema = mongoose.Schema;
	let ObjectId = mongoose.Schema.Types.ObjectId;
	let db = mongoose.connect(settings.dbUrl);

	// db.on('error',console.error.bind(console,'连接错误:'));
	// db.once('open',console.error.bind(console,'打开连接:'));

	let userSchema = new mongoose.Schema({
		email:{type:String,required: true},		/*邮箱*/
		password:{type:String,required: true},	/*密码*/
		username:{type:String,required: true},	/*用户名*/
		isStatus:{type:Number,default:0}		/*状态  -1封禁，0正常，1超级管理员*/
	});
	
	let articleSchema = new mongoose.Schema({
		title:{type:String,required: true},				/*标题*/
		content:{type:String,required: true},			/*内容*/
		subject:[{type:Number}],						/*所属专题  前台维护，不建表了*/
		createTime:{type:Date,default: Date.now},		/*发表时间*/
		user:{type:ObjectId, ref:"User"},				/*发表用户*/
		isStatus:{type:Number,default:0}				/*状态  -1封禁，0正常*/
	});
	
	let commentSchema = new mongoose.Schema({
		article:{type:ObjectId,ref:'Article'},		/*关联文章id*/
		createTime:{type:Date,default: Date.now},	/*创建时间*/
		content:{type:String},						/*内容*/
		user:{type:ObjectId, ref:"User"},			/*发表人*/
		isStatus:{type:Number,default:0}			/*状态  -1封禁，0正常*/
	});
	
	let models = {};
	models.User = mongoose.model('User',userSchema,'user');
	models.Article = mongoose.model('Article',articleSchema,'article');
	models.Comment = mongoose.model('Comment',commentSchema,'comment');
	models.mongoose = mongoose;
	models.conn = mongoose.connection;
	
	return models;
}

