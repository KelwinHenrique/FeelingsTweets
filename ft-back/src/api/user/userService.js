const User = require('./user');
const Tweet = require('../tweet/tweet');

const positiveTweet = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.idUser);
    if (!user) {
      return res.status(400).json({ error: 'Usuário não existe.' });
    }
    if (user.tweets.indexOf(req.params.idTweet) !== -1) {
      return res.status(400).json({ error: 'Você já classificou este tweet.' });
    }
    user.tweets = [...user.tweets, req.params.idTweet];
    await user.save();
    const tweet = await Tweet.findById(req.params.idTweet);
    tweet[req.body.sentiment] = [...tweet[req.body.sentiment], req.params.idUser];

    await tweet.save();
    return res.json(tweet);
  } catch (err) {
    return next(err);
  }
};

module.exports = { positiveTweet };
