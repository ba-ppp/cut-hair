import express from "express";
import { connection } from "../../database/mysql";
type barber = {
  id: String;
  name: String;
  position: String;
  gender: String;
  contact: String;
  email: string;
  address: String;
  birthDay: Date;
  isActive: Number;
  salary: Number;
  avt: String;
};
const router = express.Router();
export const insertUpdateBaber = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: barber[] } = req.body;
        data.map((item) => {
          const sql = "call insertUpdateBaber (?,?,?,?,?,?,?,?,?,?,?)";
          connection.query(
            sql,
            [
              item.id,
              item.name,
              item.position,
              item.gender,
              item.contact,
              item.email,
              item.address,
              item.birthDay,
              item.isActive,
              item.salary,
              item.avt,
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
