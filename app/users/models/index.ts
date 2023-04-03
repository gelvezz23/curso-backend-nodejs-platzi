import { Sequelize } from "sequelize";
import { User, userModel } from "./user.model";

export const setupUserModel = (sequelize: Sequelize): void => {
  User.init(userModel, User.config(sequelize));
  User.associate();
};
