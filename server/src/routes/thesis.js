const express = require('express');
const router = express.Router();
const thesisController = require ('../controllers/ThesisController');

// router.post('/create', userController.create);

router.put('/:id',  thesisController.update);
router.delete('/:id', thesisController.delete);
router.get('/:id',thesisController.getById);
router.post('/', thesisController.create);
router.get('/', thesisController.getAll);

module.exports = router;
