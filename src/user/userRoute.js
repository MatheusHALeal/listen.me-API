const express = require('express');
const router = express.Router();
const controller = require('./userController')

router.get('/:id', controller.get);
router.get('/', controller.getAll);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;