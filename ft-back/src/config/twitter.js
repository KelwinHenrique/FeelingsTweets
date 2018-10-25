const Twitter = require('twit');

const env = require('../.env');

const twitter = new Twitter({
  consumer_key: env.API_KEY,
  consumer_secret: env.API_SECRET,
  access_token: env.ACCESS_TOKEN,
  access_token_secret: env.ACCESS_TOKEN_SECRET,
});

module.exports = { twitter };
