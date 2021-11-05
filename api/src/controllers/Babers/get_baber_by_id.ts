import express from "express";

const router = express.Router();

export const get_baber_by_id = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        // { id: 1 }
        const { idBaber } = req.body;
        const sql = "SELECT * FROM baber where idBaber = ?";

        // sql
        const baber = {};
        res.json(baber);
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
