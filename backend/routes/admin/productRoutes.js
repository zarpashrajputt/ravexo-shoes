import express from "express";

import {
  productController,
  editProductController,
  deleteProductController
} from "../../controllers/admin/productController.js";

const router = express.Router();

router.post("/", productController);

router.post("/edit", editProductController);

router.delete("/", deleteProductController);

export default router;