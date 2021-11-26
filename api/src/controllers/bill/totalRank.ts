import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const totalRank = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const sql = "call totalRank();";
        connection.query(sql, function (err, results) {
          if (err) throw err;
          const data = {
            booking: results[0][0].booking,
            orders: results[0][0].orders,
            services: results[0][0].services,
            balance: results[0][0].balance,
          }
          res.json(data);
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
