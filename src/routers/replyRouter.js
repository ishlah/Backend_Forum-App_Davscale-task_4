const express = require("express");
const replyRouter = express();
const replyController = require("../controllers/replyController")

replyRouter.post("/api/replies", replyController.addReply);
replyRouter.get("/api/replies", replyController.getReply);
replyRouter.delete("/api/replies/:id", replyController.deletReply)

module.exports = replyRouter;
