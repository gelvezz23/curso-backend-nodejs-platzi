import { CorsOptions } from "cors";

const whiteList = ["localhost:3000"];
export const options: CorsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin ? origin : "")) {
      callback(null, true);
    } else {
      callback(new Error("access denied"));
    }
  },
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};
