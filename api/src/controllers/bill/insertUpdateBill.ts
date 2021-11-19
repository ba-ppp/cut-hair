import express from "express";
import { connection } from "../../database/mysql";
import {
  insertCustomer,
  insertUpdateCustomer,
} from "../customer/insertUpdateCustomer";

const router = express.Router();
export const insertBill = async (
  idBill: string,
  customer: {
    idCustomer: string;
    name: string;
    phone: string;
    time: string;
  },
  idBaber: string,
  idSelectedServices: string[],
  idSelectedProducts: string[]
) => {
  const sql = "call insertUpdateCustomer (?,?,?,?)";
  const sql1 = "call insertUpdateBill (?,?,?,?)";
  const sql2 = "call insertUpdateBillListService(?,?)";
  const sql3 = "call insertUpdateBillListProduct(?,?)";
  try {
    const rs = await new Promise((resolve, reject) => {
      connection.query(
        sql,
        [customer.idCustomer, customer.name, customer.time, customer.phone],
        (err) => {
          if (err) reject(err);
          resolve(true);
        }
      );
    });
    if (rs) {
      const rs1 = await new Promise((resolve, reject) => {
        connection.query(
          sql1,
          [idBill, idBaber, customer.idCustomer],
          (err) => {
            if (err) reject(err);
            resolve(true);
          }
        );
      });
      if (rs1) {
        const rs2 = await Promise.all(
          idSelectedServices.map((id) => {
            return new Promise((resolve, reject) => {
              connection.query(sql2, [idBill, id], (err) => {
                if (err) reject(err);
                resolve(true);
              });
            });
          })
        );
        const rs3 = await Promise.all(
          idSelectedProducts.map((id) => {
            return new Promise((resolve, reject) => {
              connection.query(sql3, [idBill, id], (err) => {
                if (err) reject(err);
                resolve(true);
              });
            });
          })
        );
        if (rs2 && rs3) {
          return true;
        }
      }
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const insertUpdateBill = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idBill, customer, idBaber, idServiceItem, idProductItem } =
          req.body;
        const status = insertBill(
          idBill,
          customer,
          idBaber,
          idServiceItem,
          idProductItem
        );

        status.then((result) => {
          if (result) {
            res.json({
              status: 200,
              body: "success",
            });
          } else {
            // listen to the status of mysql
            res.json({ status: 500, body: "failed" });
          }
        });
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
