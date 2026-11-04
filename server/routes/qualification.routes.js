import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

router
  .route("/api/qualifications")
  .get(qualificationCtrl.list)
  .post(qualificationCtrl.create)
  .delete(qualificationCtrl.removeAll);

router
  .route("/api/qualifications/:qualificationId")
  .get(qualificationCtrl.read)
  .put(qualificationCtrl.update)
  .delete(qualificationCtrl.remove);

router.param("qualificationId", qualificationCtrl.qualificationById);

export default router;