import express from "express";
import { connection } from "../../database/mysql";
import {
  insertCustomer,
  insertUpdateCustomer,
} from "../customer/insertUpdateCustomer";

const router = express.Router();

type CustomerData = {
  id: string;
  name: string;
  date: Date;
  phone: string;
};

const insertBill = (req: express.Request, res: express.Response) => {
  const customers: CustomerData = req.body.customers;
  insertCustomer(customers.id, customers.name, customers.date, customers.phone) // insert customer

  const service: string[] = req.body.service;
  service.forEach((item) => {
    
  })
};

export const insertUpdateBill = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const {
          idBill,
          idBaber,
          idCustomer,
          idSeat,
          idServiceItem,
          idProductItem,
        } = req.body;

        const sql = "call insertUpdateBill (?,?,?,?,?,?)";
        connection.query(
          sql,
          [idBill, idBaber, idCustomer, idSeat, idServiceItem, idProductItem],
          function (err, results) {
            if (err) throw err;
            res.json(results.affectedRows);
          }
        );

        // sql
        // const baber = {};
        // res.json(baber);
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
