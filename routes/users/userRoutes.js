const express = require('express');
const router = express.Router();
const userValidation = require('../users/utils/userValidation');
require('../../lib/passport');

const { 
  getLogin,
  getRegister,
  getProfile,
  getUpdateProfile,
  register,
  login,
  logout
} = require('../users/controllers/userController');

router.get('/register', getRegister);
router.get('/login', getLogin);
router.get('/profile', getProfile);
router.get('/update-profile', getUpdateProfile)
router.get('/logout', logout);

router.post('/register', userValidation, register);
router.post('/login', login);

module.exports = router;
