import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const rankServiceItem = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const sql = "call rankServiceItem()";
        connection.query(sql, function (err, results) {
          const data = results[0].slice(0,5);
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
