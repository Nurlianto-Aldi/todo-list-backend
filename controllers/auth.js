const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const authServices = require("../services/auth");

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const userExist = await authServices.userExist(email)
    if (userExist.length > 0) {
      return res.status(400).json({
        message: "Email already exist."
      })
    }
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const newUser = await authServices.newUser(email, hashedPassword);
    
    res.status(201).json({
      message: "Account created!",
      user: newUser[0]
    });
  
  } catch (err) {
    console.error(err);
    res.status(500).send(`WARNING! There is an error ${err}`);
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const token = await authServices.loginUser(email, password);
    
    res.status(200).json({
      message: "Login succesfull.",
      token: token
    })
  } catch (err) {
    console.error(err.message);
    res.status(401).json({
      message: err.message
    })
  }
}

module.exports = {
  createUser,
  loginUser
}