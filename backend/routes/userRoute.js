const express = require('express');
const { register, login, logout, getOtherUsers } = require('../controllers/userControllers');
const isAuthenticated = require('../middleware/isAuthenticated');



const router = express.Router();

// Define your routes here
router.route('/register').post(register);
router.route('/login').post(login); 
router.route('/logout').get(logout); 
router.route('/').get(isAuthenticated,getOtherUsers);//getOtherUser run, after the authentication

module.exports = router; // Correct the typo to module.exports


