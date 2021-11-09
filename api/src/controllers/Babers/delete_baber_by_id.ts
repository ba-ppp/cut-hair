import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const delete_baber_by_id = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const { idBaber } = req.body;
        const sql = "call delete_baber(?)";
        connection.query(sql, [idBaber], function (err, results) {
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
