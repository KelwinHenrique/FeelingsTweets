const express = require('express');

const auth = require('./auth');
const AuthService = require('../api/user/authService');
const UserService = require('../api/user/userService');
const TweetService = require('../api/tweet/tweetService');

module.exports = (server) => {
  /*
   * Rotas protegidas por Token JWT
   */
  const protectedApi = express.Router();
  server.use('/api', protectedApi);

  protectedApi.use(auth);

  /*
   * Rotas abertas
   */
  const openApi = express.Router();
  server.use('/oapi', openApi);

  openApi.post('/login', AuthService.login);
  openApi.post('/signup', AuthService.signup);
  openApi.post('/validateToken', AuthService.validateToken);

  /*
   * Rotas Tweet
   */
  openApi.get('/startBase', TweetService.startBase);
  TweetService.Tweet.register(openApi, '/tweet');

  /*
   * Rotas User
   */
  openApi.post('/classify/:idUser/:idTweet', UserService.positiveTweet);
};
