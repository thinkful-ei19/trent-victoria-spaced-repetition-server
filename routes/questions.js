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
    // as of now the answer is sent to the client, down the road make 
    // it not send the answer
      const { symbol, number  } = result.questions.head.value;
      res.json({ symbol, number });
    })
    .catch(err => next(err));
});

router.put('/questions', (req,res, next) => {
  const {username} = req.user; 
  const userGuess = req.body.name.toLowerCase();
  let answer;
  let isCorrect;
  return User.find({username})
    .then(([result]) => {
      // this first part pulls the current question so it can grab the answer
      answer = result.questions[0].name.toLowerCase();
      if (answer === userGuess) {
        isCorrect = true;
        let newQuestions = [...result.questions.slice(1), result.questions[0]];
        // return mongoose updating the questions with the new questions and sending the new top question to client
      } else {
        // is correct to true and return a promise changing the questions order to reflect the incorrect answer
        //  and send the new next question to the client
      }
    })
    .catch(err => next(err));
});

module.exports = router;