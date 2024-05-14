const express = require("express");
const bookmarkRouter = express();
const bookmarkController = require("../controllers/boomarkController");

bookmarkRouter.get("/api/bookmarks", bookmarkController.handleGetBookmarks);

bookmarkRouter.post("/api/bookmarks", bookmarkController.handlePostBookmark);

bookmarkRouter.delete("/api/bookmarks/:id", bookmarkController.handleDeleteBookmark);

module.exports = bookmarkRouter;
