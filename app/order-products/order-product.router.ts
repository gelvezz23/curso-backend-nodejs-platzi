import { Router } from "express";
import { validateHandler } from "../../middleware/middleware";
import {
  createOrderProducts,
  getAllItems,
  getOrderProducts,
} from "./order-products.controller";
import { addItemDto, getItemDto } from "./order-products.dto";
const router = Router();
router.get("/", getAllItems);

router.get("/:id", validateHandler(getItemDto, "params"), getOrderProducts);

router.post("/", validateHandler(addItemDto, "body"), createOrderProducts);
export default router;
