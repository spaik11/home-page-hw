const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('main/home', { title: 'Online Shopper' });
});

module.exports = router;
