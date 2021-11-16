import { insertUpdateProduct } from "./../product/insertUpdateProduct";
import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getAllProductItem = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const sql =
          "select * from productItem join product on productItem.idProduct = product.idProduct order by  product.idProduct asc";
        connection.query(sql, function (err, results) {
          if (err) throw err;
          let data = {
            id: "",
            name: "",
            items: [] as any,
          };
          const resultsData: any = [];
          let currentId = results[0].idProduct;
          results.forEach((item: any) => {
            if (item.idProduct === currentId) {
              data.id = item.idProduct;
              data.name = item.nameProduct;
              data.items.push({
                id: item.idProductItem,
                image: item.imageProductItem,
                name: item.nameProductItem,
              });
            } else {
              resultsData.push(data);
              currentId = item.idProduct;
              const newData = {
                id : item.idProduct,
                name : item.nameProduct,
                items : [
                  {
                    id: item.idProductItem,
                    image: item.imageProductItem,
                    name: item.nameProductItem,
                  },
                ],
              };
              data = {...newData}
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
