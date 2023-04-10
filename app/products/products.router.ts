import {
  addNewProducts,
  deleteProducts,
  getProducts,
  getProductsByCategory,
  getProductsById,
  updateProducts,
} from "./products.controller";
import { Router } from "express";
import { validateHandler } from "../../middleware/middleware";
import {
  createProductDto,
  deleteProductDto,
  getProductDto,
  getProductDtoById,
  getQueryProductDto,
  updateProductDto,
} from "./products.dto";

const router: Router = Router();

router.get(
  "/",
  validateHandler(getProductDto, "params"),
  validateHandler(getQueryProductDto, "query"),
  getProducts
);
router.get(
  "/:id",
  validateHandler(getProductDtoById, "params"),
  getProductsById
);
router.get(
  "/category/:id",
  validateHandler(getProductDtoById, "params"),
  getProductsByCategory
);
router.post("/", validateHandler(createProductDto, "body"), addNewProducts);
router.patch(
  "/:id",
  validateHandler(getProductDtoById, "params"),
  validateHandler(updateProductDto, "body"),
  updateProducts
);
router.delete(
  "/:id",
  validateHandler(deleteProductDto, "params"),
  deleteProducts
);

export default router;
