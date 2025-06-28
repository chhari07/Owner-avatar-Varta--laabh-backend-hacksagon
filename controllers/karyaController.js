const Karya = require('../models/Karya');
exports.getAll = async (req, res) => res.json(await Karya.find());
exports.create = async (req, res) => res.status(201).json(await Karya.create(req.body));
exports.getOne = async (req, res) => res.json(await Karya.findById(req.params.id));
exports.update = async (req, res) => res.json(await Karya.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => res.json(await Karya.findByIdAndDelete(req.params.id));
