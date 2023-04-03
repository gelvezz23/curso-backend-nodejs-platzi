import { NextFunction, Request, Response } from "express";
import ProductsService from "./products.service";
const service = new ProductsService();

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error: any) {
    next(error);
  }
};

export const getProductsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const filterById = await service.findById(id);
    res.json(filterById);
  } catch (error: any) {
    next(error);
  }
};

export const addNewProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const newData = await service.create(body);
    res.status(201).json({
      message: "create",
      newData,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const newData = await service.update(id, body);
    res.json({
      message: "update",
      newData,
      id,
    });
  } catch (error: any) {
    next(error);
  }
};

export const deleteProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const productDelete = await service.delete(id);
    res.json({
      message: "delete",
      productDelete,
    });
  } catch (error: any) {
    next(error);
  }
};
