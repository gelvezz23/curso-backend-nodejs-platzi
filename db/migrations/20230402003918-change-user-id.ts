"use strict";
import {
  customerModel,
  CUSTOMER_TABLE,
} from "./../../app/customer/models/customer.model";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    await queryInterface.createTable(CUSTOMER_TABLE, customerModel);
  },

  async down(queryInterface: any) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
