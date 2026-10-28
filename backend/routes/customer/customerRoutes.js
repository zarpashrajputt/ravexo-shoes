import express from "express";

import {
  customerController,
  loginController
} from "../../controllers/customer/customerController.js";

const router = express.Router();

// CUSTOMER SIGN UP
router.post("/", customerController);

// CUSTOMER LOGIN
router.post("/login", loginController);

export default router;