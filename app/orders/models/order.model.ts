import { Model, DataTypes, Sequelize } from "sequelize";
import { Customer, CUSTOMER_TABLE } from "../../customer/models/customer.model";
import { orderProps } from "../types";

export const ORDER_TABLE = "orders";

export const orderModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: "customer_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: "id",
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: DataTypes.NOW,
  },
};

export class Order extends Model<orderProps> {
  static associate() {
    Order.belongsTo(Customer, { as: "customer", foreignKey: "customerId" });
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
      timestamps: false,
    };
  }
}
