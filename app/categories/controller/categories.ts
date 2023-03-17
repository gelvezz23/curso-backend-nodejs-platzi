import { Request, Response } from "express";

export const getCategories = (req: Request, res: Response) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
};
