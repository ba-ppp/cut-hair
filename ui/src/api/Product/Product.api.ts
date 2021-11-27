import axios from "axios";
import { hostApi } from "config/environment";
import { GoodItem } from "model/util.model";

export const getAllProductItems = async () => {
  const data = await axios.get(`${hostApi}/productItemGetAll`);
  return data;
};

export const getProductRank = async () => {
  const data = await axios.get(`${hostApi}/productItemRank`);
  return data;
};

export const insertUpdateProductItem = async (item: { data: GoodItem[] }) => {
  const response = await axios.post(`${hostApi}/productItemInsertUpdate`, item);
  return response;
};

export const deleteProductId = async (data: { data: string[] }) => {
  const response = await axios.post(`${hostApi}/productItemDeleteById`, data);
  return response;
};
