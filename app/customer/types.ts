import { userProps } from "../users/types";

export interface customerProps {
  id?: string;
  name?: string;
  lastName?: string;
  phone?: string;
  userId?: number;
  email?: string;
  password?: string;
  role?: string;
  user?: userProps;
}
