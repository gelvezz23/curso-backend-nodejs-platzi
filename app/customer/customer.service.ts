import boom from "@hapi/boom";
import { Customer } from "./models/customer.model";
import { customerProps } from "./types";
class CustomerService {
  constructor() {}

  async find() {
    const rta = await Customer.findAll({
      include: ["user"],
    });
    return rta;
  }

  async findById(id: string) {
    const user = await Customer.findByPk(id, {
      include: ["user"],
    });
    if (!user) {
      throw boom.notFound("customer not found");
    }
    return user;
  }

  async create(data: customerProps) {
    const newCustomer = await Customer.create(data, {
      include: ["user"],
    });
    return newCustomer;
  }

  async update(id: string, changes: customerProps) {
    const model = await this.findById(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id: string) {
    const model = await this.findById(id);
    await model.destroy();
    return { rta: true };
  }
}

export default CustomerService;
