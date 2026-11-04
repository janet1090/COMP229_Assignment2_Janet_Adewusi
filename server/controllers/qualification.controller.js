import Qualification from "../models/qualification.model.js";

const getErrorMessage = (error) => {
  return error.message || "Unable to complete the qualification request.";
};

const create = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    const savedQualification = await qualification.save();
    return res.status(201).json(savedQualification);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const list = async (req, res) => {
  try {
    const qualifications = await Qualification.find().sort({ completion: -1 });
    return res.json(qualifications);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const qualificationById = async (req, res, next, id) => {
  try {
    const qualification = await Qualification.findById(id);

    if (!qualification) {
      return res.status(404).json({ error: "Qualification not found." });
    }

    req.qualification = qualification;
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid qualification id." });
  }
};

const read = (req, res) => {
  return res.json(req.qualification);
};

const update = async (req, res) => {
  try {
    const updatedQualification = await Qualification.findByIdAndUpdate(
      req.qualification._id,
      req.body,
      { new: true, runValidators: true }
    );

    return res.json(updatedQualification);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const remove = async (req, res) => {
  try {
    await req.qualification.deleteOne();
    return res.json({ message: "Qualification deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    return res.json({
      message: `${result.deletedCount} qualifications deleted.`
    });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

export default {
  create,
  list,
  qualificationById,
  read,
  update,
  remove,
  removeAll
};