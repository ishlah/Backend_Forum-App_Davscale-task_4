require("dotenv").config();

const MONGO_DB_URL = process.env.NODE_ENV === "development" ? process.env.MONGODB_URL_DEV:process.env.MONGODB_URL_PROD ;

module.exports = MONGO_DB_URL
