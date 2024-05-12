const Replies = require("../models/replyModel");

async function addReply(req, res) {
  const { threadId, replyContent, userId } = req.body;

  const newReply = new Replies({
    threadId,
    replyContent,
    userId,
  });

  const saveReply = await newReply.save()

  res.status(201).json({message :"add new reply", data:saveReply})
}

async function getReply (req, res){
    const allReplies = await Replies.find().populate("threadId").populate("userId")

    res.status(200).json({message:"All Replies", data:allReplies})
}

async function deletReply(req,res){
    const replyId = req.params.id

    await Replies.findOneAndDelete({_id : replyId})

    res.status(200).send("Delet reply successfully")
}

module.exports = {addReply, getReply, deletReply}
