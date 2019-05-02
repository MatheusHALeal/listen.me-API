const express = require('express');
const router = express.Router();
const controller = require('./recomendationController')

router.get('/:id', controller.get);
router.get('/', controller.getAll);
router.post('/', controller.post);
router.put('/:id', controller.put);

module.exports = router;