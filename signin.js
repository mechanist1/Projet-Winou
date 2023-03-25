var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/signin', (req, res) => {
  const data = req.body; // Extract data from request body
  console.log(data); // Log data to console
  res.send('Received data!!!!!'); // Send response back to clients
});
module.exports = router;
  