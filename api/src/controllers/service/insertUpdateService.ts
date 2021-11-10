import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insertUpdateService = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idService, nameService } = req.body;
        const sql = "call insertUpdateService (?,?)";
        connection.query(
          sql,
          [idService, nameService],
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
