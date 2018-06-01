'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');
const {User} = require('../models/user');
const Question = require('../models/question');

const seedUsers = require('../db/seed/users');
const seedReserveQuestions = require('../db/seed/reserveQuestions');

// seed production db 'mongodb://dev:dev@ds237700.mlab.com:37700/spaced-repetition-trent-victoria'
mongoose.connect('mongodb://dev:dev@ds237700.mlab.com:37700/spaced-repetition-trent-victoria')
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    return Promise.all([
      User.insertMany(seedUsers),
      User.createIndexes(),
      Question.insertMany(seedReserveQuestions)
    ]);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });