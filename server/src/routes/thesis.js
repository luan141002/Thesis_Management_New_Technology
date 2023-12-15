const express = require("express");
const router = express.Router();
const thesisController = require("../controllers/ThesisController");

router.post("/register", thesisController.registerThesis);
router.post("/register/dean", thesisController.registerThesisForDean);
router.put("/:id/approve", thesisController.approveThesis);
router.put("/:id/deny", thesisController.denyThesis);
router.post("/assign-defense-member", thesisController.assignDefenseMember);

router.get("/pending/:major", thesisController.getAllPendingThesis);
router.get("/approved/:major", thesisController.getAllApprovalThesis);
router.get("/:adviserId/faculty", thesisController.getByFacultyId);
router.get("/:studentId/student", thesisController.getByStudentId);

router.put("/:id", thesisController.update);
router.delete("/:id", thesisController.delete);
router.get("/:id", thesisController.getById);
router.post("/", thesisController.create);
router.get("/", thesisController.getAll);

module.exports = router;
