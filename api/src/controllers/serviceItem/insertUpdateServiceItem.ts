import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insertUpdateServiceItem = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idServiceItem , nameServiceItem, time, idService, priceServiceItem, imageServiceItem } =
          req.body;
        const sql = "call insertUpdateServiceItem (?,?,?,?,?,?)";
        connection.query(
          sql,
          [idServiceItem , nameServiceItem, time, idService, priceServiceItem, imageServiceItem],
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
