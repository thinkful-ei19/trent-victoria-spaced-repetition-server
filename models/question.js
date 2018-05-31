'use strict';

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  atomicWeight: { type: Number },
  number: { type: Number },
  next: { type: Number },
  correct: { type: Number },
  incorrect: { type: Number },
  m: { type: Number },
});

questionSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id; 
    delete ret.__v;
  }
});

module.exports = mongoose.model('Question', questionSchema);