import { getCategories } from "../controller/categories";
import { Router } from "express";

const router: Router = Router();

router.get("/:categoryId/products/:productId", getCategories);

export default router;
