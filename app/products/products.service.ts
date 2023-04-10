import boom from "@hapi/boom";
import { Products } from "./models/product.model";
import { ProductsProps } from "./types";
import { ParsedQs } from "qs";
import { Op } from "sequelize";

class ProductsService {
  constructor() {}

  async create(data: ProductsProps) {
    const newProduct = await Products.create(data);
    return newProduct;
  }
  async find(query: ProductsProps | ParsedQs) {
    const {
      limit,
      offset,
      price,
      priceMax,
      priceMin = 0,
    } = query as ProductsProps;
    const options = {
      include: ["category"],
    };
    if (limit && offset) {
      Object.assign(options, { limit: limit });
      Object.assign(options, { offset: offset });
    }
    if (price) {
      Object.assign(options, { where: { price: price } });
    }

    if (priceMin && priceMax) {
      Object.assign(options, {
        where: { price: { [Op.gte]: priceMin, [Op.lte]: priceMax } },
      });
    }

    const products = await Products.findAll(options);
    return products;
  }
  async findById(id: string) {
    const product = await Products.findByPk(id);
    if (!product) {
      throw boom.notFound("product not found");
    }
    return product;
  }
  async findByCategory(id: string) {
    const productsByCategory = await Products.findAll({
      where: { categoryId: id },
      include: ["category"],
    });
    return productsByCategory;
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
