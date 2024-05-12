const Session = require("../models/sessionModel")

// Session Method
async function middleware (req, res, next) {
  const sessionId = req.cookies?.sessionId;

  // Cek keberadaan session
  if (!sessionId) {
    return res.send("Kamu tidak memiliki session");
  }

  // Cek kecocokan session
  const session = await Session.findOne({ _id: sessionId });
  if (!session) {
    return res.send("Session invalid, jadi tak punya akses");
  }
  next()
}

module.exports = middleware