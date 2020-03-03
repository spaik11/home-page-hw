const express = require('express');
const router = express.Router();
const products = require('../lib/loaders');

router.get('/', (req, res, next) => {
  return res.render('main/home', { title: 'Online Shopper', products });
});

module.exports = router;
