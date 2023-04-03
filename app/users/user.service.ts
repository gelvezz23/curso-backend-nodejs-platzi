import boom from "@hapi/boom";
import { User } from "./models/user.model";
import { userProps } from "./types";
//import { getConnection } from "./../../libs/postgres";
class UserService {
  constructor() {}

  async create(data: userProps) {
    const newUser = await User.create(data);
    return newUser;
  }

  async find() {
    const users = await User.findAll();
    if (!users) throw boom.notFound("Users not founds");
    //const rta = await client.query("SELECT * FROM tasks");
    return users;
  }

  async findOne(id: string) {
    const user = await User.findByPk(id);
    if (!user) throw boom.notFound("User not found");
    return user;
  }

  async update(id: string, changes: userProps) {
    const user = await this.findOne(id);
    const rta = await user?.update(changes);
    return rta;
  }

  async delete(id: string) {
    const user = await this.findOne(id);
    await user?.destroy();
    return { id };
  }
}

export default UserService;
