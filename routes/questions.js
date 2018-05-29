'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Question = require('../models/question');
const { JWT_SECRET, JWT_EXPIRY } = require('../config');
const router = express.Router();

const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });



router.get('/questions', jwtAuth, (req,res,next) => {
  return Question.find()
    .then(result => {
      console.log(result);
      res.json(result);
    });
    
});

module.exports = router;