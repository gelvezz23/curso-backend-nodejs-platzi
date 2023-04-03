"use strict";
import { userModel, USER_TABLE } from "../../app/users/models/user.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any) {
    await queryInterface.addColumn(USER_TABLE, "role", userModel.role);
  },

  async down(queryInterface: any) {
    await queryInterface.removeColumn(USER_TABLE, "role");
  },
};
