const Samuhik = require('../models/Samuhik');

exports.getAll = async (req, res) => {
  try {
    const all = await Samuhik.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newEntry = await Samuhik.create({ ...req.body, createdBy: req.user?.id });
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const found = await Samuhik.findById(req.params.id);
    if (!found) return res.status(404).json({ message: 'Not found' });
    res.json(found);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID', error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Samuhik.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Samuhik.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Delete failed', error: err.message });
  }
};
