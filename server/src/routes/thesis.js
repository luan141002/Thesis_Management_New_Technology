const express = require('express');
const router = express.Router();
const thesisController = require ('../controllers/ThesisController');

router.post('/register',thesisController.register);
router.put('/:id/approve',  thesisController.approveThesis);
router.put('/:id/deny',  thesisController.denyThesis);
router.post('/assign-defense-member', thesisController.assignDefenseMember);

router.get('/pending',thesisController.getAllPendingThesis);
router.get('/approved',thesisController.getAllApprovalThesis);
router.get('/:adviserId/faculty',thesisController.getByFacultyId);
router.get('/:studentId/faculty',thesisController.getByStudentId);

router.put('/:id',  thesisController.update);
router.delete('/:id', thesisController.delete);
router.get('/:id',thesisController.getById);
router.post('/', thesisController.create);
router.get('/', thesisController.getAll);

module.exports = router;
