const express = require("express");
const replyRouter = express();
const replyController = require("../controllers/replyController")

replyRouter.post("/api/replies", replyController.handlePostReply);
replyRouter.get("/api/replies", replyController.handleGetReplies);
replyRouter.delete("/api/replies/:id", replyController.handleDeletReply)

module.exports = replyRouter;
