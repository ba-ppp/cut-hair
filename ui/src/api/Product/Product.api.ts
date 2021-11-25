import axios from "axios";
import { hostApi } from "config/environment";

export const getAllProductItems = async () => {
  const data = await axios.get(`${hostApi}/productItemGetAll`);
  return data;
};

export const getProductRank = async () => {
  const data = await axios.get(`${hostApi}/productItemRank`);
  return data;
}
