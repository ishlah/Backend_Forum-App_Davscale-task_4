const express = require("express");
const bookmarkRouter = express();
const bookmarkController = require("../controllers/boomarkController");

bookmarkRouter.get("/api/bookmarks", bookmarkController.getBookmark);

bookmarkRouter.post("/api/bookmarks", bookmarkController.addBookmark);

bookmarkRouter.delete("/api/bookmarks/:id", bookmarkController.deleteBookmark);

module.exports = bookmarkRouter;
