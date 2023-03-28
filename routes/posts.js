const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const url = 'mongodb://localhost:27017/posts';

const postSchema = new mongoose.Schema({
  title: String,
  object: String,
  des: String,
  date: String,
  detail: String,
  type: String,
  place: String,
  pic: Buffer
});

const post = mongoose.model('post', postSchema);

router.post('/post', upload.single('pic'), (req, res) => {
  const data = req.body;
  
  if (!req.file) {
    console.log("No file uploaded");
    res.status(400).send("No file uploaded");
    return;
  }
  
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "../uploads/" + req.file.filename);
  fs.rename(tempPath, targetPath, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
      return;
    }

    mongoose.connect(url, { useNewUrlParser: true })
      .then(() => {
        const pos = new post({
          title: data.title,
          object: data.object,
          des: data.des,
          date: data.date,
          detail: data.detail,
          type: data.type,
          place: data.place,
          pic: fs.readFileSync(targetPath)
        });

        return pos.save();
      })
      .then(() => {
        console.log('post saved successfully');
        mongoose.disconnect();
        res.send('Received data!!!!!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('Internal server error');
      });
  });
});

module.exports = router;