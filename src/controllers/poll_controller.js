import Poll from '../models/poll';

export const getPolls = () => {
  // should return a promise that returns a list of polls
  return Poll.find({});
};

export const createPoll = (poll) => {
  // takes in an object with the fields that polls should have
  // and saves them to the database
  // returns a promise
  const p = new Poll();
  p.text = poll.text;
  p.imageURL = poll.imageURL;
  return p.save();
};

export const vote = (pollID, upvote) => {
  // takes in a poll id to update a boolean 1 is upvote and
  // 0 is downvotes
  // returns a promise
  return Poll.findOne({ _id: pollID }).then((poll) => {
    console.log(`updating vote: ${poll} ${upvote}`);
    if (upvote) {
      poll.upvotes += 1;
    } else {
      poll.downvotes += 1;
    }
    return poll.save();
  });
};
