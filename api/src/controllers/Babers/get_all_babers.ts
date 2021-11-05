import express from "express";
const router = express.Router();

export const get_all_babers = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        res.json();
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
