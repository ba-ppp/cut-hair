import express from "express";
import { connection } from "../../database/mysql";
type serviceItem = {
  id: string;
  name: string;
  time: Date;
  idService: string;
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
        data.map((item) => {
          const sql = "call insertUpdateServiceItem (?,?,?,?,?)";
          connection.query(
            sql,
            [
              item.id,
              item.name,
              item.time,
              item.idService,
              item.price,
              item.image,
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
