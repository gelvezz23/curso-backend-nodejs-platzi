import { Router } from "express";

import { validateHandler } from "./../../middlewares/validate";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomerById,
  updateCustomer,
} from "./customer.controller";
import {
  createCustomerDto,
  getCustomerDto,
  updateCustomerDto,
} from "./customer.dto";

const router = Router();

router.get("/", getCustomer);
router.get("/:id", validateHandler(getCustomerDto, "params"), getCustomerById);
router.post("/", validateHandler(createCustomerDto, "body"), createCustomer);

router.patch(
  "/:id",
  validateHandler(getCustomerDto, "params"),
  validateHandler(updateCustomerDto, "body"),
  updateCustomer
);

router.delete(
  "/:id",
  validateHandler(getCustomerDto, "params"),
  deleteCustomer
);

export default router;
