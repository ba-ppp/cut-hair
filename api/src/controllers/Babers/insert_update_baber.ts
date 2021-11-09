import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const insert_update_baber = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
          
        const {
          idbaber,
          avt,
          firstname,
          lastname,
          position,
          gender,
          contact,
          address,
          birthday,
          isactive,
          salary
        } = req.body;
        const sql = "call insert_update_baber (?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(
          sql,
          [
            idbaber,
            avt,
            firstname,
            lastname,
            position,
            gender,
            contact,
            address,
            birthday,
            isactive,
            salary
          ],
          function (err, results) {
            if (err) throw err;
            res.send(results);
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
