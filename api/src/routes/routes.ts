import express from "express";
import { serverInit } from "../config/config";
import { get_all_babers } from "../controllers/Babers/get_all_babers";

const app = express();

export const routes = () => {
  serverInit(app);

  app.use("/api/babers", get_all_babers());
  // app.use('/api/', fn())
};
