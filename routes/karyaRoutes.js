const routerK = require('express').Router();
const ctrlK = require('../controllers/karyaController');
routerK.get('/', ctrlK.getAll);
routerK.post('/', ctrlK.create);
routerK.get('/:id', ctrlK.getOne);
routerK.put('/:id', ctrlK.update);
routerK.delete('/:id', ctrlK.remove);
module.exports = routerK;
