import { Router } from "express";
import { validateHandler } from "../../middleware/middleware";
import { createOrders, getAllOrder, getOrders } from "./order.controller";
import { getOrderDto, createOrderDto } from "./order.dto";
const router = Router();
router.get("/", getAllOrder);
router.get("/:id", validateHandler(getOrderDto, "params"), getOrders);
router.post("/", validateHandler(createOrderDto, "body"), createOrders);
export default router;
