import express from "express";
import { adminController } from "../../controllers/admin/adminController.js";

const router = express.Router();

router.post("/", adminController);

export default router;