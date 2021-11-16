import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getAllServiceItem = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const sql =
          "select * from serviceItem join service on serviceItem.idService = service.idService order by service.idService asc";
        connection.query(sql, function (err, results) {
          if (err) throw err;
          let data = {
            id: "",
            name: "",
            items: [] as any,
          };
          const resultsData: any = [];
          let currentId = results[0].idService;
          results.forEach((item: any) => {
            if (item.idService === currentId) {
              data.id = item.idService;
              data.name = item.nameService;
              data.items.push({
                id: item.idServiceItem,
                image: item.imageServiceItem,
                name: item.nameServiceItem,
                time: item.time,
                price: item.priceServiceItem,
              });
            } else {
              currentId = item.idService;
              resultsData.push(data);
              const newData = {
                id: item.idService,
                name: item.nameService,
                items: [
                  {
                    id: item.idServiceItem,
                    image: item.imageServiceItem,
                    name: item.nameServiceItem,
                    time: item.time,
                    price: item.priceServiceItem,
                  },
                ],
              };
              data = { ...newData };
            }
          });
          resultsData.push(data);
          res.json(resultsData);
        });

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
