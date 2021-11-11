import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insertUpdateCustomer = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const { idCustomer, nameCustomer, timeBook, phone } =
          req.body;
        const sql = "call insertUpdateCustomer (?,?,?,?)";
        connection.query(
          sql,
          [idCustomer, nameCustomer, timeBook, phone],
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
