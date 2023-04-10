import boom from "@hapi/boom";

import { Order } from "./models/order.model";
import { orderProps } from "./types";

class OrderService {
  constructor() {}

  async create(data: orderProps) {
    const newOrder = await Order.create(data);
    return newOrder;
  }

  async find() {
    const order = await Order.findAll({
      include: [
        {
          association: "customer",
          include: ["user"],
        },
      ],
    });
    return order;
  }

  async findOne(id: string) {
    const order = await Order.findByPk(id, {
      include: [
        {
          association: "customer",
          include: ["user"],
        },
      ],
    });
    return order;
  }

  async update(id: string, changes: orderProps) {
    return {
      id,
      changes,
    };
  }

  async delete(id: string) {
    return { id };
  }
}

export default OrderService;
