'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {LinkedList} = require('../linked-list');


const {User} = require('../models/user');
const { JWT_SECRET, JWT_EXPIRY } = require('../config');
const router = express.Router();


const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });

function convertArrayQuestions(arr) {
  const linkedListQuestions = new LinkedList();
  arr.forEach(item => {
    linkedListQuestions.insertFirst(item);
  });
  return linkedListQuestions;
}

function convertListToArray(list) {
  const arr = [];
  let currentNode = list.head;
  while (currentNode.next !== null) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  arr.push(currentNode.value);
  return arr;
}

router.get('/questions', jwtAuth, (req,res, next) => {
  const {username} = req.user; 
  return User.find({username})
    .then(([result]) => {
      const head = result.head;
      const { symbol, number, atomicWeight  } = result.questions[head];
      res.json({ symbol, number, atomicWeight });
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
  return User.find({username})
    .then(([result]) => {
      const head = result.head;
      points = result.points;
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
      } else {
        isCorrect = false;
        mValue = 1;
        incorrect += 1;
      }
      if (mValue > result.questions.length - 1) {
        return User.updateOne({username, 'questions.next' : null}, {$set: { 'questions.$.next': head}})
          .then(() => {
            if (isCorrect) {
              return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { points: points, head: headNode.next, 'questions.$.next': null,'questions.$.m' : mValue, 'questions.$.correct' : correct}});
            } else {
              return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { points: points, head: headNode.next, 'questions.$.next': null,'questions.$.m' : mValue, 'questions.$.incorrect' : incorrect}});
            }
            
          });
      }
      for (let i = 0; i < mValue; i++) {
        currentNode = result.questions[currentNode.next];
      }
      return User.updateOne({username, 'questions.next' : currentNode.next}, {$set: { points: points, head: headNode.next, 'questions.$.next': head}})
        .then(() => {
          if (isCorrect) {
            return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { 'questions.$.next': currentNode.next, 'questions.$.m' : mValue, 'questions.$.correct' : correct}});
          } else {
            return User.updateOne({username, 'questions.next' : headNode.next}, {$set: { 'questions.$.next': currentNode.next, 'questions.$.m' : mValue, 'questions.$.incorrect' : incorrect}});
          }
        });
    }) 
    .then(() => {
      return res.json({answer, isCorrect, points, correct}); 
    })
    .catch(err => next(err));
});


module.exports = router;