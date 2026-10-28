import express from "express";

import { deliveryController } from "../../controllers/deliveryRider/deliveryStatusController.js";

const router = express.Router();

router.post("/", deliveryController);

export default router;