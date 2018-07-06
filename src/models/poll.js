import mongoose, { Schema } from 'mongoose';

// Copied from SA7 assignment

// definition of what feilds the Poll document should have
const PollSchema = new Schema({
  text: String,
  imageURL: String,
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
}, {
  // enabling virtuals (derived fields)
  toJSON: {
    virtuals: true,
  },
});

// creating the virtual field score
PollSchema.virtual('score').get(function scoreCalc() {
  return this.upvotes - this.downvotes;
});

// create model class
const PollModel = mongoose.model('Poll', PollSchema);

export default PollModel;
