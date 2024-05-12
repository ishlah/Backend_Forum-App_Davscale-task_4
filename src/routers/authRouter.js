const express = require("express");
const authRouter = express();
const authController = require("../controllers/authController.js");

authRouter.post("/auth/register", authController.handleRegister);

authRouter.post("/auth/login", authController.handleLoginSession);

authRouter.get("/auth/logout", authController.handleLogout);

module.exports = authRouter;
