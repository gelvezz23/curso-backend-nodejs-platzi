import { ProductsProps } from "./types";
import boom from "@hapi/boom";
const faker = require("faker");

class ProductsService {
  products: ProductsProps[];
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  async create(body: ProductsProps) {
    const newProduct = { ...body, id: faker.datatype.uuid() };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const products = this.products;
    if (!products) throw boom.notFound("Product not found");
    return products;
  }

  async findById(id: string) {
    const findProduct = this.products.find((item) => item.id === id);
    if (!findProduct) throw boom.notFound("Product not found");
    return findProduct;
  }

  async update(id: string, newData: ProductsProps) {
    const indexProduct = this.products.findIndex((item) => item.id === id);
    const product = this.products[indexProduct];
    this.products[indexProduct] = { ...product, ...newData };

    if (indexProduct === -1) throw boom.notFound("Product not found");
    return this.products[indexProduct];
  }

  async delete(id: string) {
    const indexProduct = this.products.findIndex((item) => item.id === id);
    if (indexProduct === -1) throw boom.notFound("Product not found");
    this.products.splice(indexProduct, 1);
    return id;
  }
}
export default ProductsService;
