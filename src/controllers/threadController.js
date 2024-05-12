const Threads = require("../models/threadModel");

async function postThread(req, res) {
  const { title, category, content, userId } = req.body;

  const newThread = new Threads({
    title,
    category,
    content,
    userId,
  });

  const saveThread = await newThread.save();
  res
    .status(201)
    .json({ message: "Success creat new thread", data: saveThread });
}

async function getThread(req, res) {
  const allThreads = await Threads.find().populate("userId");

  res.status(200).json({ message: "get all threads", data: allThreads });
}

async function getSingleThread(req, res) {
  const threadId = req.params.id;

  const singleThraed = await Threads.findById(threadId).populate("userId")

  res.status(200).json({ message: "get single thread", data: singleThraed });
}

async function updateThread(req, res) {
  const { title, category, content, userId } = req.body;

  const threadId = req.params.id;

  const updateThread = await Threads.findOneAndUpdate(
    { _id: threadId },
    { title, category, content, userId },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "success update thread", data: updateThread });
}

async function deleteThread(req, res) {
  const threadId = req.params.id;

  await Threads.findOneAndDelete({ _id: threadId });

  res.status(200).send("delet success");
}

module.exports = {
  postThread,
  getThread,
  updateThread,
  deleteThread,
  getSingleThread,
};
