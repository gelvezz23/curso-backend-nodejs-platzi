import { Application } from "express";
import { Path as path } from "./paths";

import productsRouter from "../products/products.router";
import categoriesRouter from "../categories/categories.router";
import customerRouter from "../customer/customer.router";
import usersRouter from "../users/user.router";
import orderRouter from "../orders/order.router";
import orderProductRouter from "../order-products/order-product.router";

export const router = (app: Application) => {
  app.use(path.products, productsRouter);
  app.use(path.categories, categoriesRouter);
  app.use(path.users, usersRouter);
  app.use(path.customer, customerRouter);
  app.use(path.order, orderRouter);
  app.use(path.orderProduct, orderProductRouter);
};
