var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")

var url='mongodb://localhost:27017/posts'

const loginschema = mongoose.Schema({
  username: String,
  email: String,
  pwd: String,
});

const member = mongoose.model('member', loginschema);

module.exports=member;

