'use strict';

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../', '.env') });

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  algorithms: ['HS256']
};
console.log(options)
const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  done(null, payload.user);
});

module.exports = jwtStrategy;
