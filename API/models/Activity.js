const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Activity
let Activity = new Schema({
  ActivityName: {
    type: String
  },
  ActivityBio: {
    type: String
  },
  ActivityNoParticipants: {
    type: Number
  },
  ActivitySpace: {
    type: Number
  },
  ActivityReport: {
    type: Number
  },

},{
    collection: 'Activity'
});

module.exports = mongoose.model('Activity', Activity);
