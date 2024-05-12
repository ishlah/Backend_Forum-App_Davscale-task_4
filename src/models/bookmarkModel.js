const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookmarkSchema = new Schema({
  threadId: { type: Schema.Types.ObjectId, ref: "Threads" },
  userId: { type: Schema.Types.ObjectId, ref: "Users" }
});

const Bookmarks = mongoose.model("Bookmarks", bookmarkSchema)

module.exports = Bookmarks