import express from "express";
import contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();

router
  .route("/api/contacts")
  .get(contactCtrl.list)
  .post(contactCtrl.create)
  .delete(contactCtrl.removeAll);

router
  .route("/api/contacts/:contactId")
  .get(contactCtrl.read)
  .put(contactCtrl.update)
  .delete(contactCtrl.remove);

router.param("contactId", contactCtrl.contactById);

export default router;