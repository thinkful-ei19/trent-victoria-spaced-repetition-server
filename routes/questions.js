'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const {User} = require('../models/user');
const { JWT_SECRET, JWT_EXPIRY } = require('../config');
const router = express.Router();

const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });



router.get('/questions', jwtAuth, (req,res, next) => {
  const {username} = req.user; 
  return User.find({username})
    .then(([result]) => {
      res.json(result.questions[0]);
    })
    .catch(err => next(err));
});

module.exports = router;