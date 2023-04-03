import { NextFunction, Response, Request } from "express";
import CustomerService from "./customer.service";

const service = new CustomerService();

export const getCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await service.find();
    return res.json(customer);
  } catch (error) {
    next(error);
  }
};

export const getCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const customer = await service.findById(id);
    return res.json(customer);
  } catch (error) {
    next(error);
  }
};

export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const newCustomer = await service.create(body);
    res.status(201).json(newCustomer);
  } catch (error) {
    next(error);
  }
};

export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const body = req.body;
    res.status(201).json(await service.update(id, body));
  } catch (error) {
    next(error);
  }
};

export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    res.status(200).json(await service.delete(id));
  } catch (error) {
    next(error);
  }
};
