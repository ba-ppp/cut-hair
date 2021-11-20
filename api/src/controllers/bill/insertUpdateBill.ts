
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
  const sql1 = "call insertUpdateBill (?,?,?)";
  const sql2 = "call insertBillListService(?,?)";
  const sql3 = "call insertBillListProduct(?,?)";
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
        console.log(idSelectedServices);
        const rs2 = await Promise.all(
          idSelectedServices.map((id) => {
            console.log("aaa");
            return new Promise((resolve, reject) => {
              connection.query(sql2, [idBill, id], (err) => {
                if (err) console.log(err);
                resolve(true);
              });
            });
          })
        );
        const rs3 = await Promise.all(
          idSelectedProducts.map((id) => {
            return new Promise((resolve, reject) => {
              connection.query(sql3, [idBill, id], (err) => {
                console.log(idBill,id);
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
    console.log(error);
    return false;
  }
};

export const insertUpdateBill = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idBill, customer, idBaber, idSelectedServices, idSelectedProducts } =
          req.body;
        const status = insertBill(
          idBill,
          customer,
          idBaber,
          idSelectedServices,
          idSelectedProducts
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