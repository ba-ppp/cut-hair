import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();
export const deleteBarberById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        console.log("a");
        const { data }: { data: string[] } = req.body;
        console.log(data);
        const rs = await Promise.all(
          data.map((id) => {
            return new Promise((resolve, reject) => {
              const sql = "call deleteBaber (?)";
              connection.query(sql, [id], function (err, results) {
                if (err) reject(err);
                resolve(true);
              });
            });
          })
        );
        if (rs) {
          res.send({
            status: "success",
          });
        }
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
