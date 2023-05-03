var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
var bcrypt =require("bcrypt")
var jwt = require("jsonwebtoken")
var url='mongodb://localhost:27017/posts';

const member = require('../models/membermodel');


router.post('/signup', async(req, res) => {
  const data = req.body; // Extract data from request body
  console.log(data); // Log data to console
  
  mongoose.connect(url, { useNewUrlParser: true })
    .then(async() => {
      const hash=await bcrypt.hash(data.pwd,10);

      if (data.pwd == data.pwdagain) {
        const mem = new member({
          username: data.username,
          email: data.email,
          pwd: hash,
        });

        await mem.save(); // return the Promise
        const to = jwt.sign({ email: mem.email, mem: mem.pwd , username :mem.username }, 'Themechanist1');

        res.status(200).json({ to });
        console.log("ey ey cv signup")
      } else {
      }
    })
    .then(() => {
      console.log('Member saved successfully!!!!');
      mongoose.disconnect();
     
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports=router;

