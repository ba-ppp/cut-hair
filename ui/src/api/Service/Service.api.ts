import axios from "axios";
import { hostApi } from "config/environment";
import { GoodItem } from "model/util.model";

export const getAllServiceItems = async () => {
  const data = await axios.get(`${hostApi}/serviceItemGetAll`);
  return data;
};

export const getServiceRank = async () => {
  const data = await axios.get(`${hostApi}/serviceItemRank`);
  return data;
};

export const insertUpdateServiceItem = async (item: { data: GoodItem[] }) => {
  const response = await axios.post(`${hostApi}/serviceItemInsertUpdate`, item);
  return response;
};

export const deleteServiceId = async (data: { data: string[] }) => {
  const response = await axios.post(`${hostApi}/serviceItemDeleteById`, data);
  return response;
};
