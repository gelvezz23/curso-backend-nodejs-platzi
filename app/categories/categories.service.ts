import boom from "@hapi/boom";
import { categoriesProps } from "./types";

class CategoryService {
  constructor() {}
  async create(data: categoriesProps) {
    return data;
  }

  async find() {
    return [];
  }

  async findOne(id: string) {
    return { id };
  }

  async update(id: string, changes: categoriesProps) {
    return {
      id,
      changes,
    };
  }

  async delete(id: string) {
    return { id };
  }
}

export default CategoryService;
