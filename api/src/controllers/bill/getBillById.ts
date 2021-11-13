import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getBillById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const { idBill } = req.body;
        const sql = "call selectBillById(?)";
        connection.query(sql, [idBill], function (err, results) {
          if (err) throw err;
          res.json(results[0]);
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
