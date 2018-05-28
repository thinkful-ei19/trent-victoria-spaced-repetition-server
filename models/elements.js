'use strict';

const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  atomic weight: { type: Number },
  number: { type: Number }
});

elementSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id; 
    delete ret.__v;
  }
});

module.exports = mongoose.model('Element', elementSchema);
