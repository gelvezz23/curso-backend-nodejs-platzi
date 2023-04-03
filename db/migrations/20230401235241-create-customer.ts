"use strict";
import { DataTypes } from "sequelize";
import { CUSTOMER_TABLE } from "./../../app/customer/models/customer.model";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, "user_id", {
      allowNull: false,
      field: "user_id",
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down(queryInterface: any) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
