import express from "express";

import {
  paymentController,
  updatePaymentController,
  deletePaymentController
} from "../../controllers/customer/paymentController.js";

const router = express.Router();

router.post("/", paymentController);

router.post("/edit", updatePaymentController);

router.delete("/", deletePaymentController);

export default router;