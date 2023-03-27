var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
const url = 'mongodb://localhost:27017/posts';


const postSchema = new mongoose.Schema({
  title:String,
  object:String,
  des:String,
  date:String,
  detail:String,
  type:String,
  place:String,
  pic:String
});

const post = mongoose.model('post', postSchema);
/* GET home page. */
router.post('/post', (req, res) => {
  const data = req.body; // Extract data from request body
  console.log(data); // Log data to console

  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
    
        const pos = new post({ //p stands for posts
        title:data.title,
        object:data.object,
        des:data.des,
        date:data.date,
        detail:data.detail,
        type:data.type,
        place:data.place,
        pic:data.pic  
        
        });

        return pos.save(); // return the Promise
     
    })
    .then(() => {
      console.log('post saved successfully');
      mongoose.disconnect();
      res.send('Received data!!!!!'); // Send response back to clients after post is saved
    })
    .catch(err => {
      console.log(err);
    });
});




module.exports = router;
