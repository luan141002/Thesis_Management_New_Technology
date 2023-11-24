const express = require('express');
const router = express.Router();
const authToken = require('../middleware/authToken');
const userController = require ('../controllers/UserController');

// router.post('/create', userController.create);

router.put('/:id/lock',  userController.lock);
router.put('/:id',  userController.update);
router.delete('/:id', userController.delete);
router.get('/:id',userController.getById);
router.post('/', userController.create);
router.get('/', userController.getAll);

module.exports = router;
