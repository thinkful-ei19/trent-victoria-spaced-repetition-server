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
      const { symbol, number  } = result.questions[head];
      res.json({ symbol, number });
    })
    .catch(err => next(err));
});

// Intermediate Algorithm
// router.put('/questions', (req,res, next) => {
//   const {username} = req.user; 
//   const userGuess = req.body.name.toLowerCase();
//   let answer;
//   let isCorrect;
//   return User.find({username})
//     .then(([result]) => {
//       // this first part pulls the current question so it can grab the answer
//       answer = result.questions.head.value.name.toLowerCase();
//       if (answer === userGuess) {
//         isCorrect = true;
//         let newQuestions = [...result.questions.slice(1), result.questions[0]];
//         // return mongoose updating the questions with the new questions and sending the new top question to client
//       } else {
//         // is correct to true and return a promise changing the questions order to reflect the incorrect answer
//         //  and send the new next question to the client
//       }
//     })
//     .catch(err => next(err));
// });

// Simple Algorithm
router.put('/questions', jwtAuth, (req,res, next) => {
  const {username} = req.user; 
  const userGuess = req.body.name.toLowerCase();
  let answer;
  let isCorrect;
  return User.find({username})
    .then(([result]) => {
      answer = result.questions[0].name.toLowerCase();
      if (answer === userGuess) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
      const linkedList = convertArrayQuestions(result.questions);
      linkedList.dequeue();
      const linkedListArray = convertListToArray(linkedList);
      return User.updateOne({username}, {$set: {questions: linkedListArray}});
    })
    .then(() => {
      return res.json({answer, isCorrect}); 
    })
    .catch(err => next(err));
});

module.exports = router;