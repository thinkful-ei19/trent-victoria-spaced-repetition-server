'use strict';

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const {JWT_SECRET } = require('../config');
const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../', '.env') });

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  algorithms: ['HS256']
};
const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  done(null, payload.user);
});

module.exports = jwtStrategy;
