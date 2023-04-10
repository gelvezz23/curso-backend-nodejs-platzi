import { NextFunction, Request, Response } from "express";
import OrderProductService from "./order-product.service";

const service = new OrderProductService();

export const getAllItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const items = await service.find();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

export const getOrderProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const items = await service.findOne(id);
    console.log();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

export const createOrderProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const newItem = await service.create(body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};
