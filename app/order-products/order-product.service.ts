import boom from "@hapi/boom";
import { OrderProductProps } from "./types";
import { OrderProduct } from "./models/order-products.model";

class OrderProductService {
  constructor() {}

  async create(data: OrderProductProps) {
    const newItem = await OrderProduct.create(data);
    return newItem;
  }

  async find() {
    const order = await OrderProduct.findAll({ include: "items" });
    if (!order) throw boom.notFound("Order Product not founds");
    return order;
  }

  async findOne(id: string) {
    const order = await OrderProduct.findByPk(id, { include: "items" });
    if (!order) throw boom.notFound("Order Product not founds");
    return order;
  }

  async update(id: string, changes: OrderProductProps) {
    return {
      id,
      changes,
    };
  }

  async delete(id: string) {
    return { id };
  }
}

export default OrderProductService;
