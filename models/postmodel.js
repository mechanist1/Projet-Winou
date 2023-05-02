const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const url = 'mongodb://localhost:27017/posts';

const postSchema = new mongoose.Schema({
  title: String,
  tel: String,
  des: String,
  dateoflosing: String,
  detail: String,
  type: String,
  place: String,
  pic: Buffer,
  dateofpost:Date,
});

const post = mongoose.model('post', postSchema);
module.exports=post;