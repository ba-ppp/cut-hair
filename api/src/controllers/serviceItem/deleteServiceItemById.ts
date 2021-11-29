import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();
export const deleteServiceItemById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: string[] } = req.body;
        const rs = await Promise.all(
          data.map((id) => {
            return new Promise((resolve, reject) => {
              const sql = "call deleteServiceItem (?)";
              connection.query(sql, [id], function (err, results) {
                if (err) reject(err);
                resolve(true);
              });
            });
          })
        );
        if (rs) {
          res.json({
            status: 200,
            message: "success",
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
