import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const rankProductItem = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const sql = "call rankProductItem()";
        connection.query(sql, function (err, results) {
          if (err) throw err;
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
