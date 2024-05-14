const Users = require("../models/userModel");

async function handleGetUsers(req, res) {
  const allUser = await Users.find();
  res.status(200).json({ message: "get all user", data: allUser });
}

async function handleGetUser(req, res) {
  const userId = req.params.id;

  const singleUser = await Users.findOne({ _id: userId });

  res.status(200).json({ message: "get single user", data: singleUser });
}

async function handleDeleteUser(req, res) {
  const userId = req.params.id;

  await Users.findByIdAndDelete(userId);
  res.status(200).json({ message: "deleted user" });
}

async function handleEditUser(req, res) {
  const { fullName, userName, email, password, avatarUrl } = req.body;
  const userId = req.params.id;

  const updateUser = await Users.findOneAndUpdate(
    { _id: userId },
    { fullName, userName, email, password, avatarUrl },
    { new: true }
  );

  res.status(200).json({ message: "successfully update", data: updateUser });
}

module.exports = { handleGetUsers, handleGetUser, handleDeleteUser, handleEditUser };
