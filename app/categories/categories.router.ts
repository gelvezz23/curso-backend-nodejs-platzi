import { Router } from "express";
import { validateHandler } from "../../middleware/middleware";
import {
  createCategories,
  deleteCategories,
  getCategories,
  getCategoriesById,
  updateCategories,
} from "./categories.controller";

import {
  createCategoryDto,
  updateCategoryDto,
  getCategoryDto,
} from "./categories.dto";

const router = Router();

router.get("/", getCategories);

router.get(
  "/:id",
  validateHandler(getCategoryDto, "params"),
  getCategoriesById
);

router.post("/", validateHandler(createCategoryDto, "body"), createCategories);

router.patch(
  "/:id",
  validateHandler(getCategoryDto, "params"),
  validateHandler(updateCategoryDto, "body"),
  updateCategories
);

router.delete(
  "/:id",
  validateHandler(getCategoryDto, "params"),
  deleteCategories
);

export default router;
