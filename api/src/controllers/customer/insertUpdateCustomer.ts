import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insertCustomer = (
  idCustomer: string,
  nameCustomer: string,
  timeBook: Date,
  phone: string
) => {
  const sql = "call insertUpdateCustomer (?,?,?,?)";
  return connection.query(sql, [idCustomer, nameCustomer, timeBook, phone]);
};

export const insertUpdateCustomer = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { id, name, date, phone } = req.body;
        const status = insertCustomer(id, name, date, phone);
        status.on("error", () => { // listen to the status of mysql
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
