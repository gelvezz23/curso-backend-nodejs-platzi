import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import {
  handleErrors,
  logErrors,
  boomHandleErrors,
  ormHandlerError,
} from "../../middleware/errors.handler";
import { router } from "./router";
import { options } from "../../middleware/cors.validate";
import { sequelize_postgres } from "../../libs/sequelize/sequelize_postgres";

export const Server = () => {
  const app: Application = express();
  const port: string = process.env.HEYHOTEL_PORT || "";
  const host: string = process.env.HEYHOTEL_URL || "";
  app.use(express.json());
  app.use(helmet());
  app.use(cors(options));

  const listen = () => {
    try {
      sequelize_postgres.authenticate();
      router(app);
      app.use(logErrors);
      app.use(ormHandlerError);
      app.use(boomHandleErrors);
      app.use(handleErrors);
      app.listen(port, () => {
        console.log(`CORS-enabled web server listening on port ${port}`);
        console.log(`Run app in ${host}:${port}`);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  listen();
};
