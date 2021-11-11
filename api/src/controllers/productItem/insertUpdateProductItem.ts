import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insertUpdateProductItem = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idProductItem, nameProductItem, idProduct, priceProductItem, imageProductItem } =
          req.body;
        const sql = "call insertUpdateProductItem (?,?,?,?,?)";
        connection.query(
          sql,
          [idProductItem, nameProductItem, idProduct, priceProductItem, imageProductItem],
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
