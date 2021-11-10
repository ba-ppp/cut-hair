import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getBaberById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const { idBaber } = req.body;
        const sql = "SELECT idBaber, name, position, gender, contact, address, date_format(birthDay,'%Y-%m-%d') as birtDay, isActive, salary, avt FROM baber where idBaber = ?";
        connection.query(sql, [idBaber], function (err, results) {
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
