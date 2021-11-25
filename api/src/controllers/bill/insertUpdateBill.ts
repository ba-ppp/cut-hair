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
    id: string;
    name: string;
    phone: string;
    date: string;
  },
  idBarber: string,
  idSelectedServices: string[],
  idSelectedProducts: string[]
) => {
  const sql = "call insertUpdateCustomer (?,?,?,?)";
  const sql1 = "call insertUpdateBill (?,?,?)";
  const sql2 = "call insertBillListService(?,?)";
  const sql3 = "call insertBillListProduct(?,?)";
  const sql4 = "call updateTotalPriceBill(?)";
  try {
    const rs = await new Promise((resolve, reject) => {
      connection.query(
        sql,
        [customer.id, customer.name, customer.date, customer.phone],
        (err) => {
          if (err) reject(err);
          resolve(true);
        }
      );
    });
    if (rs) {
      const rs1 = await new Promise((resolve, reject) => {
<<<<<<< HEAD
        connection.query(sql1, [idBill, idBarber, customer.id], (err) => {
          if (err) reject(err);
          resolve(true);
        });
=======
        connection.query(
          sql1,
          [idBill, idBarber, customer.id],
          (err) => {
            if (err) reject(err);
            resolve(true);
          }
        );
>>>>>>> 0bac8d098457f531c6aaee004572e21f0d9256a2
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
          const rs4 = await new Promise((resolve, reject) => {
            connection.query(sql4, [idBill], (err) => {
              if (err) reject(err);
              resolve(true);
            });
          });
          if(rs4){
            return true;
          }
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
<<<<<<< HEAD
        const {
          idBill,
          customer,
          idBarber,
          idSelectedServices,
          idSelectedProducts,
        } = req.body;
=======
        const { idBill, customer, idBarber, idSelectedServices, idSelectedProducts } =
          req.body;
>>>>>>> 0bac8d098457f531c6aaee004572e21f0d9256a2
        const status = insertBill(
          idBill,
          customer,
          idBarber,
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
