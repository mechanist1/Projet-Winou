var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/signin', (req, res) => {
  const data = req.body; // Extract data from request body
  console.log(data); // Log data to console
  res.send('Received data!!!!!'); // Send response back to clients

  mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
    
        const mem = new member({
          
          emaillogin: data.emaillogin,
          pwdlogin: data.pwdlogin,
        });

        return mem.save(); // return the Promise
     
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
  