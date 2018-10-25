const restful = require('node-restful');

const { mongoose } = restful;
const tweetSchema = new mongoose.Schema({
  created_at: {
    type: String,
  },
  id_str: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  positive: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
  negative: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
  neutral: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
  useless: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
  textsearch: {
    type: String,
    required: true,
  },
});

module.exports = restful.model('Tweet', tweetSchema);
