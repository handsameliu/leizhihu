'use strict';

let service = require('../service');
let user = service.user;

exports.signIn = (req,res)=>{
    console.log('--');
	user.signIn(req,res);
};
exports.signUp = (req,res)=>{
	user.signUp(req,res);
};