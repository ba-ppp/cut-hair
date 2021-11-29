import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getCustomerById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const { idCustomer } = req.body;
        const sql = "SELECT idCustomer, nameCustomer, date_format(timeBook,'%a %b %d %Y %T') as timeBook, phone FROM customer where idCustomer = ?";
        connection.query(sql, [idCustomer], function (err, results) {
          if (err) throw err;
          res.json(results);
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
