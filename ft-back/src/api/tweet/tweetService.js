const _ = require('lodash');

const { twitter } = require('../../config/twitter');
const Tweet = require('./tweet');

Tweet.methods(['get', 'post', 'put', 'delete']);
Tweet.updateOptions({ new: true, runValidators: true });

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = [];
  _.forIn(dbErrors.errors, error => errors.push(error.message));
  return res.status(400).json({ errors });
};

const tweetFind = (idStr) => {
  Tweet.findOne({ id_str: idStr }, (err, tweet) => {
    if (err) {
      return true;
    }
    if (tweet) {
      return true;
    }
    return false;
  });
};

const tweetSave = (newTweet) => {
  newTweet.save((err) => {
    if (err) {
      return false;
    }
    return true;
  });
};

const getTweets = (textSearch) => {
  twitter.get('search/tweets', { q: `${textSearch} since:2014-07-11`, count: 100, lang: 'pt' }, (err, data) => {
    if (!err) {
      data.statuses.forEach((tweet) => {
        if (!tweet.truncated && !tweet.retweeted && !tweetFind(tweet.id_str)) {
          const newTweet = new Tweet({
            created_at: tweet.created_at,
            id_str: tweet.id_str,
            text: tweet.text,
            textsearch: textSearch,
          });
          tweetSave(newTweet);
        }
      });
    }
  });
};

const startBase = (req, res) => {
  const textsSearch = ['manuela', 'haddad', 'bolsonaro', 'lula', 'Mourão'];
  textsSearch.forEach((value) => {
    getTweets(value);
  });
  return res.status(200).json({ completed: true });
};


module.exports = { startBase, Tweet };
