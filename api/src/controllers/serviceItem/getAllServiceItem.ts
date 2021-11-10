import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getAllServiceItem = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const sql = "SELECT * FROM serviceItem join service on serviceItem.idService = service.idService";
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
