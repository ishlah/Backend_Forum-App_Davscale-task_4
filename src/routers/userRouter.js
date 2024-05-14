const express = require("express");
const userRouter = express();
const userController = require("../controllers/userController");

userRouter.get("/api/users", userController.handleGetUsers);
userRouter.get("/api/users/:id", userController.handleGetUser);
userRouter.delete("/api/users/:id", userController.handleDeleteUser);
userRouter.patch("/api/users/:id", userController.handleEditUser);

module.exports = userRouter;
