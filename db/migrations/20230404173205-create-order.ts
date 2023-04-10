"use strict";

import { orderModel, ORDER_TABLE } from "../../app/orders/models/order.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    await queryInterface.createTable(ORDER_TABLE, orderModel);
  },

  async down(queryInterface: any) {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
