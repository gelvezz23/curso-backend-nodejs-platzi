import boom from "@hapi/boom";
import { Products } from "./models/product.model";
import { ProductsProps } from "./types";
class ProductsService {
  constructor() {}

  async create(data: ProductsProps) {
    const newProduct = await Products.create(data);
    return newProduct;
  }
  async find() {
    const products = await Products.findAll({ include: ["category"] });
    return products;
  }
  async findById(id: string) {
    const product = await Products.findByPk(id);
    if (!product) {
      throw boom.notFound("product not found");
    }
    return product;
  }
  async update(id: string, changes: ProductsProps) {
    const product = await this.findById(id);
    const rta = await product?.update(changes);
    return rta;
  }
  async delete(id: string) {
    const product = await this.findById(id);
    await product?.destroy();
    return { id };
  }
}
export default ProductsService;
