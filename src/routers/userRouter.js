const express = require("express");
const userRouter = express();
const userController = require("../controllers/userController");

userRouter.get("/api/users", userController.getUser);
userRouter.get("/api/users/:id", userController.getSingleUser);
userRouter.delete("/api/users/:id", userController.deleteUser);
userRouter.patch("/api/users/:id", userController.updateUser);

module.exports = userRouter;
