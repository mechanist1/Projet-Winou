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
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(data.pwd, user.pwd);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email, pwd: user.pwd }, 'Themechanist1');

    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    mongoose.disconnect();
  }
});

module.exports = router;