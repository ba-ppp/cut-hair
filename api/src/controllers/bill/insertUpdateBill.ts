import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();
export const insertBill = (
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
  connection.query(sql, [
    customer.idCustomer,
    customer.name,
    customer.time,
    customer.phone,
  ]);
  connection.query(sql1, [idBill, idBaber, customer.idCustomer]);
  idSelectedServices.forEach((id) => {
    connection.query(sql2, [idBill, id]);
  });
  idSelectedProducts.forEach((id) => {
    connection.query(sql3, [idBill, id]);
  });
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

        status.on("error", () => {
          // listen to the status of mysql
          res.json({ status: 500 });
        });
        status.on("result", () => {
          res.json({ status: 200 });
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
