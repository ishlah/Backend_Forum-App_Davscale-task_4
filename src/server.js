// Declaration Express
const express = require("express");
const app = express();

// Router
const authRouter = require("./routers/authRouter.js");
const replyRouter = require("./routers/replyRouter.js");
const threadRouter = require("./routers/threadRouter.js");
const bookmarkRouter = require("./routers/bookmarkRouter.js");
const userRouter = require("./routers/userRouter.js");

//middleware
const middleware = require("./controllers/middleware.js");

// Cookies-perser
const cookieParser = require("cookie-parser");

// MongoDB
const MONGO_DB_URL = require("./config/dburl.config.js");
const mongoose = require("mongoose");
mongoose.connect(MONGO_DB_URL);

app.use(express.json());
app.use(cookieParser());

app.use("/api", middleware);

app.use(authRouter);
app.use(replyRouter);
app.use(threadRouter);
app.use(bookmarkRouter);
app.use(userRouter);

// Port
app.listen(8000);
