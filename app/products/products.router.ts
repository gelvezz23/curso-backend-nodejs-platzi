import {
  addNewProducts,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProducts,
} from "./products.controller";
import { Router } from "express";
import { validateHandler } from "../../middlewares/validate";
import {
  createProductDto,
  deleteProductDto,
  getProductDto,
  getProductDtoById,
  updateProductDto,
} from "./products.dto";

const router: Router = Router();

router.get("/", validateHandler(getProductDto, "params"), getProducts);
router.get(
  "/:id",
  validateHandler(getProductDtoById, "params"),
  getProductsById
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
