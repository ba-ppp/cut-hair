import express from "express";
import { serverInit } from "../config/config";
import { deleteBarberById } from "../controllers/barber/deleteBarberById";
import { getAllBarber } from "../controllers/barber/getAllBarber";
import { getBaberById } from "../controllers/barber/getBarberByID";
import { insertUpdateBaber } from "../controllers/barber/insertUpdateBarber";
import { getBillById } from "../controllers/bill/getBillById";
import { insertUpdateBill } from "../controllers/bill/insertUpdateBill";
import { totalRank } from "../controllers/bill/totalRank";
import { deleteCustomerById } from "../controllers/customer/deleteCustomerById";
import { getAllCustomer } from "../controllers/customer/getAllCustomer";
import { getCustomerById } from "../controllers/customer/getCustomerById";
import { insertUpdateCustomer } from "../controllers/customer/insertUpdateCustomer";
import { deleteProductById } from "../controllers/product/deleteProductById";
import { insertUpdateProduct } from "../controllers/product/insertUpdateProduct";
import { deleteProductItemById } from "../controllers/productItem/deleteProductItemById";
import { getAllProductItem } from "../controllers/productItem/getAllProductItem";
import { insertUpdateProductItem } from "../controllers/productItem/insertUpdateProductItem";
import { rankProductItem } from "../controllers/productItem/rankProductItem";
import { deleteSeatById } from "../controllers/seat/deleteSeatById";
import { insertUpdateSeat } from "../controllers/seat/insertUpdateSeat";
import { deleteServiceById } from "../controllers/service/deleteServiceById";
import { insertUpdateService } from "../controllers/service/insertUpdateService";
import { deleteServiceItemById } from "../controllers/serviceItem/deleteServiceItemById";
import { getAllServiceItem } from "../controllers/serviceItem/getAllServiceItem";
import { insertUpdateServiceItem } from "../controllers/serviceItem/insertUpdateServiceItem";
import { rankServiceItem } from "../controllers/serviceItem/rankServiceItem";

const app = express();

export const routes = () => {
  serverInit(app);
//babers
  app.use("/api/baberGetAll", getAllBarber());
  app.use("/api/baberGetById", getBaberById());
  app.use("/api/baberInsertUpdate", insertUpdateBaber());
  app.use("/api/baberDeleteById", deleteBarberById());
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
  app.use("/api/productItemRank",rankProductItem());
//service
  app.use("/api/serviceInsertUpdate", insertUpdateService());
  app.use("/api/serviceDeleteById", deleteServiceById());
//serviceItem
  app.use("/api/serviceItemGetAll", getAllServiceItem());
  app.use("/api/serviceItemInsertUpdate", insertUpdateServiceItem());
  app.use("/api/serviceItemDeleteById", deleteServiceItemById());
  app.use("/api/serviceItemRank",rankServiceItem());
//seat
  app.use("/api/seatInsertUpdate", insertUpdateSeat());
  app.use("/api/seatDeleteById", deleteSeatById());
//bill
  app.use("/api/billInsertUpdate", insertUpdateBill());
  app.use("/api/billGetById", getBillById());
  app.use("/api/totalRank", totalRank());
  // app.use('/api/', fn())
};

