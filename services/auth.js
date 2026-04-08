const authRepositories = require("../repositories/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userExist = async (email) => {
  return await authRepositories.userExist(email)
};

const newUser = async (email, password) => {
  return await authRepositories.newUser(email, password)
}

const loginUser = async (email, password) => {
  const user = await authRepositories.userExist(email);
  
  if (user.length === 0) {
    throw new Error("Email not registered.");
  }
  
  const isPasswordValid = await bcrypt.compare(password, user[0].password);
  
  if (!isPasswordValid) {
    throw new Error("Wrong password");
  }
  
  const token = jwt.sign(
    { userId: user[0].id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  
  return token;
}

module.exports = {
  userExist,
  newUser,
  loginUser
}