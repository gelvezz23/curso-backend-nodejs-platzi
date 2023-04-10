import { Category } from "./models/categories.model";
import { categoriesProps } from "./types";

class CategoryService {
  constructor() {}
  async create(data: categoriesProps) {
    const newCategory = await Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await Category.findAll();
    return categories;
  }

  async findOne(id: string) {
    const category = await Category.findByPk(id);
    return category;
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
