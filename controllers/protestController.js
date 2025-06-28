const Protest = require('../models/Protest');

// Get all protests
exports.getAll = async (req, res) => {
  try {
    const allProtests = await Protest.find();
    res.json(allProtests);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Create a new protest
exports.create = async (req, res) => {
  try {
    const newProtest = await Protest.create({
      ...req.body,
      createdBy: req.user?.id || null, // Optional: If you have user-based auth
    });
    res.status(201).json(newProtest);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
};

// Get one protest by ID
exports.getOne = async (req, res) => {
  try {
    const protest = await Protest.findById(req.params.id);
    if (!protest) return res.status(404).json({ message: 'Protest not found' });
    res.json(protest);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID', error: err.message });
  }
};

// Update protest by ID
exports.update = async (req, res) => {
  try {
    const updatedProtest = await Protest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProtest)
      return res.status(404).json({ message: 'Protest not found' });
    res.json(updatedProtest);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err.message });
  }
};

// Delete protest by ID
exports.remove = async (req, res) => {
  try {
    const deleted = await Protest.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: 'Protest not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Delete failed', error: err.message });
  }
};
