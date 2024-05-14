const express = require("express");
const threadRouter = express();
const threadController = require("../controllers/threadController.js");

// const jwt = require("jsonwebtoken");
const Session = require("../models/sessionModel.js");

// threadRouter.get("/api/threads", (req, res) => {
//   const token = req.cookies.token;

//   try {
//     const payload = jwt.verify(token, process.env.JWT_TOKEN);
//     console.log(payload);
//     res.send("Kamu bisa akses semua thread");
//   } catch (error) {
//     res.send("Kamu tidak memiliki akses");
//   }
// });

threadRouter.get("/api/threads", threadController.handleGetThreads);

threadRouter.get("/api/threads/:id", threadController.handleGetThread);

threadRouter.post("/api/threads", threadController.handlePostThread);

threadRouter.patch("/api/threads/:id", threadController.handleEditThread);

threadRouter.delete("/api/threads/:id", threadController.handleDeleteThread);

module.exports = threadRouter;
