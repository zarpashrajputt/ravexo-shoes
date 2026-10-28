import express from "express";

import {
  contactController,
  deleteContactController
} from "../../controllers/customer/contactController.js";

const router = express.Router();

// ADD CONTACT
router.post("/", contactController);

// DELETE CONTACT
router.delete("/:id", deleteContactController);

export default router;