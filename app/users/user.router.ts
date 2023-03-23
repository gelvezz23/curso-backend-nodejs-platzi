import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "./user.controller";

import { validateHandler } from "./../../middlewares/validate";
import { updateUserDto, createUserDto, getUserDto } from "./user.dto";

const router = Router();

router.get("/", getUsers);

router.get("/:id", validateHandler(getUserDto, "params"), getUserById);

router.post("/", validateHandler(createUserDto, "body"), createUser);

router.patch(
  "/:id",
  validateHandler(getUserDto, "params"),
  validateHandler(updateUserDto, "body"),
  updateUser
);

router.delete("/:id", validateHandler(getUserDto, "params"), deleteUser);

export default router;
