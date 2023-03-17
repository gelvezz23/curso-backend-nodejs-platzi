import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send("No hay parametros");
  }
};
