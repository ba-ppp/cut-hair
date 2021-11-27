import express from "express";
import { connection } from "../../database/mysql";
export type productItem = {
  id: string,
  name: string, 
  idType: string, 
  price: number, 
  image: string
};
const router = express.Router();
export const insertUpdateProductItem = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: productItem[] } = req.body;
        const rs = await Promise.all(data.map((item) => {
          return new Promise(async (resolve, reject) => {
            const sql = "call insertUpdateProductItem (?,?,?,?,?)";
            connection.query(
              sql,
              [
                item.id,
                item.name, 
                item.idType, 
                item.price, 
                item.image
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
            'message': 'success'
          })
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
