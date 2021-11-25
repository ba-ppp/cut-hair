import express from "express";
import { connection } from "../../database/mysql";
type productItem = {
  id: string,
  name: string, 
  idProduct: string, 
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
        data.map((item) => {
          const sql = "call insertUpdateProductItem (?,?,?,?,?)";
          connection.query(
            sql,
            [
              item.id,
              item.name, 
              item.idProduct, 
              item.price, 
              item.image
            ],
            function (err, results) {
              if (err) throw err;
              res.json({ status: 200, body: "success" });
            }
          );
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
