import axios from "axios";
import { hostApi, hostApiTest } from "config/environment";

export const getAllProductItems = async () => {

  const data = await axios.get(`${hostApi}api/productItemGetAll`);
  return data;
};
