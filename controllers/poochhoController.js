const Poochho = require('../models/Poochho');
exports.getAll = async (req, res) => res.json(await Poochho.find());
exports.create = async (req, res) => res.status(201).json(await Poochho.create(req.body));
exports.getOne = async (req, res) => res.json(await Poochho.findById(req.params.id));
exports.update = async (req, res) => res.json(await Poochho.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => res.json(await Poochho.findByIdAndDelete(req.params.id));