import Contact from "../models/contact.model.js";

// Returns a helpful error message for invalid requests.
const getErrorMessage = (error) => {
  return error.message || "Unable to complete the contact request.";
};

// Creates a new contact message.
const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const savedContact = await contact.save();

    return res.status(201).json(savedContact);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

// Gets every contact message.
const list = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json(contacts);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

// Finds one contact before read, update, or delete actions.
const contactById = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found." });
    }

    req.contact = contact;
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid contact id." });
  }
};

// Gets one contact message.
const read = (req, res) => {
  return res.json(req.contact);
};

// Updates one contact message.
const update = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.contact._id,
      req.body,
      { new: true, runValidators: true }
    );

    return res.json(updatedContact);
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

// Deletes one contact message.
const remove = async (req, res) => {
  try {
    await req.contact.deleteOne();
    return res.json({ message: "Contact deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

// Deletes every contact message.
const removeAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    return res.json({ message: `${result.deletedCount} contacts deleted.` });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(error) });
  }
};

export default {
  create,
  list,
  contactById,
  read,
  update,
  remove,
  removeAll
};