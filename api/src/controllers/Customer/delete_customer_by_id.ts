import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const delete_customer_by_id = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idcustomer } = req.body;
        const sql = "call delete_customer(?)";
        connection.query(sql, [idcustomer], function (err, results) {
          if (err) throw err;
          res.send(results);
        });

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
