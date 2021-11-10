import express from "express";
import { serverInit } from "../config/config";
import { deleteBaberById } from "../controllers/baber/deleteBaberById";
import { getAllBaber } from "../controllers/baber/getAllBaber";
import { getBaberById } from "../controllers/baber/getBaberByID";
import { insertUpdateBaber } from "../controllers/baber/insertUpdateBaber";
import { deleteCustomerById } from "../controllers/customer/deleteCustomerById";
import { getAllCustomer } from "../controllers/customer/getAllCustomer";
import { getCustomerById } from "../controllers/customer/getCustomerById";
import { insertUpdateCustomer } from "../controllers/customer/insertUpdateCustomer";
import { deleteProductById } from "../controllers/product/deleteProductById";
import { insertUpdateProduct } from "../controllers/product/insertUpdateProduct";
import { deleteProductItemById } from "../controllers/productItem/deleteProductItemById";
import { getAllProductItem } from "../controllers/productItem/getAllProductItem";
import { insertUpdateProductItem } from "../controllers/productItem/insertUpdateProductItem";

const app = express();

export const routes = () => {
  serverInit(app);
//babers
  app.use("/api/baberGetAll", getAllBaber());
  app.use("/api/baberGetById", getBaberById());
  app.use("/api/baberInsertUpdate", insertUpdateBaber());
  app.use("/api/baberDeleteById", deleteBaberById());
//customers
  app.use("/api/customerGetAll", getAllCustomer());
  app.use("/api/customerGetById", getCustomerById()); 
  app.use("/api/customerInsertUpdate", insertUpdateCustomer());
  app.use("/api/customerDeleteById", deleteCustomerById());
//product
  app.use("/api/productInsertUpdate", insertUpdateProduct());
  app.use("/api/productDeleteById", deleteProductById());
//productItem
  app.use("/api/productItemGetAll", getAllProductItem());
  app.use("/api/productItemInsertUpdate", insertUpdateProductItem());
  app.use("/api/productItemDeleteById", deleteProductItemById());
  // app.use('/api/', fn())
};
