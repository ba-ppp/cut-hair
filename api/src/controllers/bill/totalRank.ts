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
