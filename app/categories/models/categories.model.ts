import { Model, DataTypes, Sequelize } from "sequelize";
import { Products } from "../../products/models/product.model";
import { categoriesProps } from "../types";

export const CATEGORY_TABLE = "categories";

export const categoryModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: DataTypes.NOW,
  },
};

export class Category extends Model<categoriesProps> {
  static associate() {}
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
      timestamps: false,
    };
  }
}
