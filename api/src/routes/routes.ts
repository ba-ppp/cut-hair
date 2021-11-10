import express from "express";
import { serverInit } from "../config/config";
import { deleteBaberById } from "../controllers/baber/deleteBaberById";
import { getAllBaber } from "../controllers/baber/getAllBaber";
import { getBaberById } from "../controllers/baber/getBaberByID";
import { insertUpdateBaber } from "../controllers/baber/insertUpdateBaber";

const app = express();

export const routes = () => {
  serverInit(app);
//babers
  app.use("/api/baberGetAll", getAllBaber());
  app.use("/api/baberGetById", getBaberById());
  app.use("/api/baberInsertUpdate", insertUpdateBaber());
  app.use("/api/baberDeleteById", deleteBaberById());
//customers
  // app.use("/api/customer_get_all", get_all_customer());
  // app.use("/api/customer_get_by_id", get_customer_by_id()); 
  // app.use("/api/customer_insert_update", insert_update_customer());
  // app.use("/api/customer_delete_by_id", delete_customer_by_id());

  // app.use('/api/', fn())
};
