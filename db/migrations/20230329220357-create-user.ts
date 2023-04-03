"use strict";

import { userModel, USER_TABLE } from "../../app/users/models/user.model";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface: any) {
  await queryInterface.createTable(USER_TABLE, userModel);
}
export async function down(queryInterface: any) {
  await queryInterface.dropTable(USER_TABLE);
}
