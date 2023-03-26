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






router.post('/signup', (req, res) => {
  const data = req.body; // Extract data from request body
  console.log(data); // Log data to console
  res.send('Received data!!!!!'); // Send response back to clients

  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
     

      if (data.pwd == data.pwdagain) {
        const mem = new member({
          username: data.username,
          email: data.email,
          pwd: data.pwd,
        });

        return mem.save(); // return the Promise
      } else {
        console.log("the passwords don't match");
      }
    })
    .then(() => {
      console.log('Member saved successfully');
      mongoose.disconnect();
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
