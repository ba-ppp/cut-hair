import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const getBillById = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const { idBill } = req.body;
        const sql = "select bill.idBill, baber.nameBaber, customer.nameCustomer, bill.idSeat, service.nameService, serviceItem.nameServiceItem, serviceItem.priceServiceItem, product.nameProduct, productItem.nameProductItem, productItem.priceProductItem, bill.totalPrice from bill join baber on bill.idBaber = baber.idBaber join customer on bill.idCustomer = customer.idCustomer join serviceItem on bill.idServiceItem = serviceItem.idServiceItem join service on service.idService = serviceItem.idService join productItem on bill.idProductItem = productItem.idProductItem join product on product.idProduct = productItem.idProduct where bill.idBill = ?";
        connection.query(sql, [idBill], function (err, results) {
          if (err) throw err;
          res.json(results);
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
