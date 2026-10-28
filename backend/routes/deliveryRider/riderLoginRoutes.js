import express from "express";
import { riderLoginController } from "../../controllers/deliveryRider/riderLoginController.js";

const router = express.Router();

router.post("/", riderLoginController);

export default router;