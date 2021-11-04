import express from "express";
import { serverInit } from "../config/config";

const app = express();

export const routes = () => {
  serverInit(app);

  // app.use('/api/', fn())
};
