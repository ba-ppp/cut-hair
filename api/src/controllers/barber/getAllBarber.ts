import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getAllBarber = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        console.log("connect");
        const sql =
          "SELECT idBaber, nameBaber, position, gender, contact, address, date_format(birthDay,'%Y-%m-%d') as birthDay, isActive, salary, avatar, email FROM baber";
        connection.query(sql, function (err, results) {
          if (err) throw err;
          const data: any = [];
          results.map((item: any) => {
            const newItem = {
              id: item.idBaber,
              avt: item.avatar,
              name: item.nameBaber,
              position: item.position,
              gender: item.gender,
              contact: item.contact,
              address: item.address,
              birthDay: item.birthDay,
              isActive: item.isActive,
              salary: item.salary,
              email: item.email,
            };
            data.push(newItem);
          });
          res.json(data);
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
