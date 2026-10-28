import express from "express";

import {
  checkoutController,
  updateCheckoutController,
  deleteCheckoutController
} from "../../controllers/customer/checkoutController.js";

const router = express.Router();

router.post("/", checkoutController);

router.post("/edit/:id", updateCheckoutController);

router.delete("/:id", deleteCheckoutController);

export default router;