const express = require('express');
const router = express.Router();
const majorController = require('../controllers/MajorController')

router.get('/:id', majorController.getById);
router.post('/', majorController.create);
router.get('/', majorController.getAll);

module.exports = router;