const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  threadId: {type:Schema.Types.ObjectId, ref:"Threads"},
  replyContent: String,
  userId: {type:Schema.Types.ObjectId, ref:"Users"},
});

const Replies = mongoose.model("Replies", replySchema);

module.exports = Replies;
