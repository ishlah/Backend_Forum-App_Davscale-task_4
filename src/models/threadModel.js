const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const threadSchema = new Schema({
  title: String,
  category: String,
  content: String,
  userId: { type: Schema.Types.ObjectId, ref: "Users" },
});

const Threads = mongoose.model("Threads", threadSchema);

module.exports = Threads;
