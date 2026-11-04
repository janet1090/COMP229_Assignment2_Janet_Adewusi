import User from "../models/user.model.js";

const getErrorMessage = (error) => {
  return error.message || "Unable to complete the user request.";
};

const create = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    return res.status(201).json({
      message: "User created successfully."
    });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const list = async (req, res) => {
  try {
    const users = await User.find().select("name email created updated");
    return res.json(users);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    req.profile = user;
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid user id." });
  }
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    const user = Object.assign(req.profile, req.body);
    user.updated = Date.now();

    await user.save();

    user.hashed_password = undefined;
    user.salt = undefined;
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const remove = async (req, res) => {
  try {
    const deletedUser = await req.profile.deleteOne();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;

    return res.json(deletedUser);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await User.deleteMany({});
    return res.json({ message: `${result.deletedCount} users deleted.` });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

export default {
  create,
  list,
  userByID,
  read,
  update,
  remove,
  removeAll
};