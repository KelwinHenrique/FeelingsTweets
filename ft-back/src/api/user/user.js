const restful = require('node-restful');

const { mongoose } = restful;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    max: 20,
    required: true,
  },
  tweets: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tweet',
  }],
});

module.exports = restful.model('User', userSchema);
