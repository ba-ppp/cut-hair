import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getAllBaber = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        console.log('connect')
        const sql =
          "SELECT idBaber, nameBaber, position, gender, contact, address, date_format(birthDay,'%Y-%m-%d') as birtDay, isActive, salary, avatar FROM baber";
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
