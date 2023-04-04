import userModel from "../models/User.js";
import bcrypt from "bcrypt";
//Register
export const registerController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //Create password
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password, salt);

    //Create new user
    const newUser = new userModel({
      username,
      email,
      password: hashpass,
    });
    //save user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Login
export const loginController = async (req, res) => {
  try {
    //Find a user
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Invalid Credentials");
    }

    //Validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json("Invalid Credentials");
    }

    //Send res
    res.status(200).json({ _id: user._id, username: user.username });
  } catch (err) {
    res.status(500).json(err);
  }
};
