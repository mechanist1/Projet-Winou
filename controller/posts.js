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
const post = require('../models/postmodel')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const url = 'mongodb://localhost:27017/posts';  

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
        a = Date.now();
      
        const pos = new post({
          title: data.title,
          tel: data.tel,
          des: data.des,
          dateoflosing: data.dateoflosing,
          detail: data.detail,
          type: data.type,
          place: data.place,
          pic: fs.readFileSync(targetPath),
          dateofpost : a,
        }); 

        return pos.save();
      })
      .then(() => {
        console.log('post saved successfully');
        return post.find().sort({ dateofpost: -1 }).limit(6).exec();
      })
      .then(posts => {
       
        res.status(200).send(posts);
      })
      .catch(err => {
        console.log(err);
        
        res.status(500).send('Internal server error');
      });
  });
});

router.get("/",(req,res)=>{
  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
      return post.find().sort({ dateofpost: -1 }).limit(6).exec();
    })
    .then(posts => {
   
      res.status(200).send(posts);
      console.log("sending the posts , get request succesful")
    })
    .catch(err => {
      console.log(err);
    
      res.status(500).send('Internal server error');
    });
});

module.exports = router;
router.get("/",(req,res)=>{
  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
      return post.find().sort({ dateofpost: -1 }).limit(6).exec();
    })
    .then(posts => {
   
      res.status(200).send(posts);
      console.log("sending the posts , get request succesful")
    })
    .catch(err => {
      console.log(err);
    
      res.status(500).send('Internal server error');
    });
});
router.get("/all",(req,res)=>{
  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
      return post.find().sort({ dateofpost: -1 }).exec();
    })
    .then(posts => {
   
      res.status(200).send(posts);
      console.log("sending the posts , get request succesful")
    })
    .catch(err => {
      console.log(err);
    
      res.status(500).send('Internal server error');
    });
});



module.exports = router;

