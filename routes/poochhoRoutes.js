const routerP = require('express').Router();
const ctrlP = require('../controllers/poochhoController');
routerP.get('/', ctrlP.getAll);
routerP.post('/', ctrlP.create);
routerP.get('/:id', ctrlP.getOne);
routerP.put('/:id', ctrlP.update);
routerP.delete('/:id', ctrlP.remove);
module.exports = routerP;