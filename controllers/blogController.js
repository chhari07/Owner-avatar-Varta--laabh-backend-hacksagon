const Blog = require('../models/Blog');
exports.getAll = async (req, res) => res.json(await Blog.find());
exports.create = async (req, res) => res.status(201).json(await Blog.create(req.body));
exports.getOne = async (req, res) => res.json(await Blog.findById(req.params.id));
exports.update = async (req, res) => res.json(await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => res.json(await Blog.findByIdAndDelete(req.params.id))