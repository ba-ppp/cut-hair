import express from "express";
import { connection } from "../../database/mysql";
type serviceItem = {
  id: string;
  name: string;
  time: Date;
  idType: string;
  price: string;
  image: string;
};
const router = express.Router();
export const insertUpdateServiceItem = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: serviceItem[] } = req.body;
        const rs = await Promise.all(data.map((item) => {
          return new Promise((resolve, reject) => {

            const sql = "call insertUpdateServiceItem (?,?,?,?,?,?)";
            connection.query(
              sql,
              [
                item.id,
                item.name,
                item.time,
                item.idType,
                item.price,
                item.image,
              ],
              function (err, results) {
                if (err) reject(err);
                resolve(true);
              }
            );
          })
        }));
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
