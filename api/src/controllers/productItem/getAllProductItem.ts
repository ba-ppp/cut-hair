import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getAllProductItem = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const sql = "SELECT * FROM productItem join product on productItem.idProduct = product.idProduct";
        connection.query(sql, function (err, results) {
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
