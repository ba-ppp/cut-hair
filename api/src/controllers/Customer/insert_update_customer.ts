import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insert_update_customer = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const { idcustomer, firstname, lastname, phone, times, timearrive } =
          req.body;
        const sql = "call insert_update_customer (?,?,?,?,?,?)";
        connection.query(
          sql,
          [idcustomer, firstname, lastname, phone, times, timearrive],
          function (err, results) {
            if (err) throw err;
            res.send(results);
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
