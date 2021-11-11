import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const deleteSeatById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idSeat } = req.body;
        const sql = "call deleteSeat(?)";
        connection.query(sql, [idSeat], function (err, results) {
          if (err) throw err;
          res.json(results.affectedRows);
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
