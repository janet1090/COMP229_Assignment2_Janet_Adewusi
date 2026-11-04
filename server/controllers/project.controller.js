import Project from "../models/project.model.js";

const getErrorMessage = (error) => {
  return error.message || "Unable to complete the project request.";
};

const create = async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    return res.status(201).json(savedProject);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const list = async (req, res) => {
  try {
    const projects = await Project.find().sort({ completion: -1 });
    return res.json(projects);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const projectById = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }

    req.project = project;
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid project id." });
  }
};

const read = (req, res) => {
  return res.json(req.project);
};

const update = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.project._id,
      req.body,
      { new: true, runValidators: true }
    );

    return res.json(updatedProject);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const remove = async (req, res) => {
  try {
    await req.project.deleteOne();
    return res.json({ message: "Project deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    return res.json({ message: `${result.deletedCount} projects deleted.` });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

export default {
  create,
  list,
  projectById,
  read,
  update,
  remove,
  removeAll
};