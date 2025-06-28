const routerB = require('express').Router();
const ctrlB = require('../controllers/blogController');
routerB.get('/', ctrlB.getAll);
routerB.post('/', ctrlB.create);
routerB.get('/:id', ctrlB.getOne);
routerB.put('/:id', ctrlB.update);
routerB.delete('/:id', ctrlB.remove);
module.exports = routerB;
