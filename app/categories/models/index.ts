import { Sequelize } from "sequelize";
import { Category, categoryModel } from "./categories.model";

export const setupCategoryModel = (sequelize: Sequelize): void => {
  Category.init(categoryModel, Category.config(sequelize));
  Category.associate();
};
