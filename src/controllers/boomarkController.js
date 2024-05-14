const Bookmarks = require("../models/bookmarkModel");

async function handlePostBookmark(req, res) {
  const { threadId, userId } = req.body;

  const newBookmark = new Bookmarks({
    threadId,
    userId,
  });

  const saveBookmark = await newBookmark.save();

  res.status(201).json({ message: "add new bookmark", data: saveBookmark });
}

async function handleGetBookmarks(req, res) {
  const allBookmark = await Bookmarks.find().populate("threadId").populate("userId");
  res.status(200).json({ message: "get all bookmarks", data: allBookmark });
}

async function handleDeleteBookmark (req, res){
    const bookmarkId = req.params.id

    await Bookmarks.findByIdAndDelete(bookmarkId)
    res.status(200).send("Delet Success")
}

module.exports = {handleDeleteBookmark, handleGetBookmarks, handlePostBookmark}
