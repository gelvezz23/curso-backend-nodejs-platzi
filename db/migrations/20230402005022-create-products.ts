"use strict";
import {
  productModel,
  PRODUCT_TABLE,
} from "../../app/products/models/product.model";
import {
  categoryModel,
  CATEGORY_TABLE,
} from "../../app/categories/models/categories.model";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    await queryInterface.createTable(CATEGORY_TABLE, categoryModel);
    await queryInterface.createTable(PRODUCT_TABLE, productModel);
  },
  async down(queryInterface: any) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
