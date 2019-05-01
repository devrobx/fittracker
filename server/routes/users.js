const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();



//User model
require('../models/Users');
const User = mongoose.model('users');


//Register
router.get('/register', (req,res) =>{

})
