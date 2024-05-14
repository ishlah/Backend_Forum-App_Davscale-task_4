const Threads = require("../models/threadModel");

async function handlePostThread(req, res) {
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

async function handleGetThreads(req, res) {
  const allThreads = await Threads.find().populate("userId");

  res.status(200).json({ message: "get all threads", data: allThreads });
}

async function handleGetThread(req, res) {
  const threadId = req.params.id;

  const singleThraed = await Threads.findById(threadId).populate("userId");

  res.status(200).json({ message: "get single thread", data: singleThraed });
}

async function handleEditThread(req, res) {
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

async function handleDeleteThread(req, res) {
  const threadId = req.params.id;

  await Threads.findOneAndDelete({ _id: threadId });

  res.status(200).send("delet success");
}

module.exports = {
  handlePostThread,
  handleGetThreads,
  handleGetThread,
  handleEditThread,
  handleDeleteThread,
};
