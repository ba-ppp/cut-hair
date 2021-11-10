import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insertUpdateBaber = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const {
          idBaber,
          firstName,
          lastName,
          position,
          gender,
          contact,
          address,
          birthDay,
          isActive,
          salary,
          avt
        } = req.body;
        const sql = "call insertUpdateBaber (?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(
          sql,
          [
            idBaber,
            firstName,
            lastName,
            position,
            gender,
            contact,
            address,
            birthDay,
            isActive,
            salary,
            avt
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
