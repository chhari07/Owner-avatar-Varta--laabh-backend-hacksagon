const Protest = require('../models/Protest');

exports.getAll = async (req, res) => {
  try {
    const protests = await Protest.find();
    res.json(protests);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newProtest = await Protest.create({ ...req.body, createdBy: req.user?.id });
    res.status(201).json(newProtest);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const protest = await Protest.findById(req.params.id);
    if (!protest) return res.status(404).json({ message: 'Not found' });
    res.json(protest);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID', error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Protest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Protest.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Delete failed', error: err.message });
  }
};
