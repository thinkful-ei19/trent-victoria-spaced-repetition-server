'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');


const {User} = require('../models/user');
const Question = require('../models/question');

const { JWT_SECRET, JWT_EXPIRY } = require('../config');
const router = express.Router();


const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });

router.get('/questions', jwtAuth, (req,res, next) => {
  const {username} = req.user; 
  return User.find({username})
    .then(([result]) => {
      const {head, points} = result;
      const { symbol, number, atomicWeight, correct  } = result.questions[head];
      res.json({ symbol, number, atomicWeight, points, correct });
    })
    .catch(err => next(err));
});


// m-value Algorithm
router.put('/questions', jwtAuth, (req,res, next) => {
  const {username} = req.user;
  const userGuess = req.body.name.toLowerCase().trim();
  let answer;
  let isCorrect;
  let points;
  let correct;
  let incorrect;
  let isCardAdded = false;
  return User.find({username})
    .then(([result]) => {
      const head = result.head;
      points = result.points;
      let inARow = result.inARow;
      let headNode = result.questions[head];
      let currentNode = result.questions[head];
      let mValue = headNode.m;
      correct = headNode.correct;
      incorrect = headNode.incorrect;
      answer = headNode.name.toLowerCase();
      if (answer === userGuess) {
        isCorrect = true;
        points += 10;
        mValue = mValue*2;
        correct += 1;
        inARow += 1;
      } else {
        isCorrect = false;
        mValue = 1;
        incorrect += 1;
        inARow = 0;
      }
      if (inARow === 10) {
        inARow = 0;
        isCardAdded = true;
      }
      if (mValue > result.questions.length - 1) {
        return User.updateOne({username, 'questions.next' : null}, {$set: { 'questions.$.next': head}})
          .then(() => {
            if (isCorrect) {
              return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { inARow: inARow, points: points, head: headNode.next, 'questions.$.next': null,'questions.$.m' : mValue, 'questions.$.correct' : correct}});
            } else {
              return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { inARow: inARow, points: points, head: headNode.next, 'questions.$.next': null,'questions.$.m' : mValue, 'questions.$.incorrect' : incorrect}});
            }
            
          });
      }
      for (let i = 0; i < mValue; i++) {
        currentNode = result.questions[currentNode.next];
      }
      return User.updateOne({username, 'questions.next' : currentNode.next}, {$set: { inARow: inARow, points: points, head: headNode.next, 'questions.$.next': head}})
        .then(() => {
          if (isCorrect) {
            return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { 'questions.$.next': currentNode.next, 'questions.$.m' : mValue, 'questions.$.correct' : correct}});
          } else {
            return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { 'questions.$.next': currentNode.next, 'questions.$.m' : mValue, 'questions.$.incorrect' : incorrect}});
          }
        });
    }) 
    .then(() => {
      return res.json({answer, isCorrect, points, correct, isCardAdded}); 
    })
    .catch(err => next(err));
});

function convertNewQuestionObject(obj) {
  const {name, symbol, atomicWeight, number,next,m,correct, incorrect} = obj;
  return {
    name, 
    symbol, 
    atomicWeight, 
    number,
    next,
    m,
    correct, 
    incorrect
  };
}

router.put('/reserve', jwtAuth, (req,res, next) => {
  const {username} = req.user;
  let nextQuestion;
  return User.find({username})
    .then(([result]) => {
      let {nextReserve} = result; 
      let newLastQuestion = result.questions.length;
      return Question.find()
        .then(result => {
          nextQuestion = convertNewQuestionObject(result[nextReserve]);
        })
        .then(() => {
          nextReserve += 1;
          return User.updateOne({username, 'questions.next' : null}, {$set: { nextReserve: nextReserve, 'questions.$.next': newLastQuestion}});
        })
        .then(() => {
          return User.updateOne({username}, { $push: { questions: nextQuestion } });
        });
    })
    .then(() => {
      return res.json(nextQuestion); 
    })
    .catch(err => next(err));
});


router.get('/stats', jwtAuth, (req,res, next) => {
  const {username} = req.user; 
  return User.find({username})
    .then(([result]) => {
      const statsArr = result.questions.map(question => {
        const {name, symbol, correct, incorrect} = question;
        return {
          name,
          symbol,
          correct,
          incorrect
        };
      });
      res.json(statsArr);
    })
    .catch(err => next(err));
});

module.exports = router;