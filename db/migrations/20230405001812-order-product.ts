"use strict";

import {
  ORDER_PRODUCT_TABLE,
  OrderProductModel,
} from "../../app/order-products/models/order-products.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductModel);
  },

  async down(queryInterface: any) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  },
};
