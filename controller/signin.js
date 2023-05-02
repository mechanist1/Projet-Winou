  const express = require('express');
  const router = express.Router();
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');
  const  member  = require('../models/membermodel');
  const url = 'mongodb://localhost:27017/posts';
  const mongoose =require('mongoose')

  router.post('/signin', async (req, res) => {
    const data = req.body;

    try {
      await mongoose.connect(url, { useNewUrlParser: true });

      const user = await member.findOne({ email: data.email });

      if (!user) {
        console.log("user doesn't exist");

        return res.status(401);
      }

      const isMatch = await bcrypt.compareSync(data.pwd, user.pwd);

      if (!isMatch) {
        console.log("passwords don't match");
        return res.status(401);
      }

      const t = jwt.sign({ email: user.email, pwd: user.pwd }, 'Themechanist1');

      res.status(200).json({ t });
      console.log("sent sayé")
    } catch (err) {
      console.error(err);
      res.status(500);
    } finally {
      mongoose.disconnect();
    }
  });
  

  module.exports = router;