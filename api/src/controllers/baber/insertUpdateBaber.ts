import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insertUpdateBaber = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const {
          idBarber,
          name,
          position,
          gender,
          contact,
          address,
          birthDay,
          isActive,
          salary,
          avatar
        } = req.body;
        const sql = "call insertUpdateBaber (?,?,?,?,?,?,?,?,?,?)";
        connection.query(
          sql,
          [
            idBarber,
            name,
            position,
            gender,
            contact,
            address,
            birthDay,
            isActive,
            salary,
            avatar
          ],
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
