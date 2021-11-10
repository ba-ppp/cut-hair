import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const deleteServiceItemById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idServiceItem } = req.body;
        const sql = "call deleteServiceItem(?)";
        connection.query(sql, [idServiceItem], function (err, results) {
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
