const express = require('express');
const router = express.Router();
const controller = require('./userController')

router.get('/:username', controller.show);
router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put("/:id/follow/:f_id", controller.follow);
router.put("/:id/unfollow/:f_id", controller.unfollow);
router.put("/:id/recommendation", controller.recommend)

module.exports = router;