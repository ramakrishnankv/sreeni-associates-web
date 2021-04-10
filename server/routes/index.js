const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('something......');
  res.send('unda...pazham');
})

module.exports = router;