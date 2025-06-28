const Samuhik = require('../models/Samuhik'); // ✅ correct import of model

// Get all Samuhik entries
exports.getAll = async (req, res) => {
  try {
    const all = await Samuhik.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Create a new entry
exports.create = async (req, res) => {
  try {
    const newEntry = await Samuhik.create({
      ...req.body,
      createdBy: req.user?.id || null,
    });
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
};

// Get one entry by ID
exports.getOne = async (req, res) => {
  try {
    const found = await Samuhik.findById(req.params.id);
    if (!found) return res.status(404).json({ message: 'Not found' });
    res.json(found);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID', error: err.message });
  }
};

// Update entry by ID
exports.update = async (req, res) => {
  try {
    const updated = await Samuhik.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err.message });
  }
};

// Delete entry by ID
exports.remove = async (req, res) => {
  try {
    const deleted = await Samuhik.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Delete failed', error: err.message });
  }
};
