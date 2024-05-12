const Users = require("../models/userModel.js");
const Session = require("../models/sessionModel.js");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register
async function handleRegister(req, res) {
  const { fullName, userName, email, password, avatarUrl } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  
  // Cek email register
  const user = await Users.findOne({ email });
  if (user) return res.status(404).json({ message: "Email already registered" });

  const newUser = new Users({
    fullName,
    userName,
    email,
    password: hashedPassword,
    avatarUrl,
  });

  const saveUser = await newUser.save();
  res
    .status(201)
    .json({ message: "Successfully User register", data: saveUser });
}

// async function handleLoginJWT(req, res) {
//   const { email, password } = req.body;

//   // 1. Cari user berdasarkan email
//   const user = await Users.findOne({ email });
//   if (!user) return res.status(404).json({ message: "Account not found" });

//   // 2. Compare password
//   const isPasswordMatch = await bcrypt.compare(password, user.password);
//   if (!isPasswordMatch) res.status(403).json({ message: "Invalid password" });

//   // 3. buat payload/ body untuk token
//   const payload = {
//     id: user._id,
//     name: user.userName,
//     email: user.email,
//   };

//   // 4. Generet token
//   const token = jwt.sign(payload, process.env.JWT_TOKEN);

//   // 5. Set token ke cookie user
//   res.cookie("token", token).send("Login success!!");
// }

async function handleLoginSession(req, res) {
  const { email, password } = req.body;

  // 1. Cari user berdasarkan email
  const user = await Users.findOne({ email });
  if (!user) return res.status(404).json({ message: "Email not found" });

  // 2. Compare password
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch)
    return res.status(403).json({ message: "Invalid password" });

  // 3. insert into DB Session
  const newSession = new Session({
    userId: user.id,
  });
  const session = await newSession.save();

  //userData
  const userData = {
    userId : user.id,
    userName : user.userName,
    email : user.email,
  }

  // 4. Send userId ke cookie
  res.cookie("sessionId", session.id).json({message :"Login Successfully", user:userData});
}

async function handleLogout(req, res) {
  const sessionId = req.cookies?.sessionId;
  // menghapus di DB
  await Session.findByIdAndDelete(sessionId)

  // Menghapus cookie di client
  res.clearCookie("sessionId");

  res.status(200).send("logout success");
}


module.exports = { handleRegister, handleLoginSession, handleLogout };
// module.exports = { handleRegister, handleLoginJWT };
