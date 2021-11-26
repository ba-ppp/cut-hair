import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();
export const deleteBarberById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: string[] } = req.body;
        data.map((id) => {
          const sql = "call deleteBaberById (?)";
          connection.query(sql, [id], function (err, results) {
            if (err) throw err;
            res.json({ status: 200, body: "success" });
          });
        });
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
