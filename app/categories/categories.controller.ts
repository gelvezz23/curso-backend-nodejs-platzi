import { NextFunction, Request, Response } from "express";
import CategoryService from "./categories.service";
const service = new CategoryService();

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

export const getCategoriesById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const createCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

export const updateCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await service.update(id, body);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const deleteCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
};
