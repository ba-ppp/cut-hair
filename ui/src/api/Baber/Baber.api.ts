import axios from "axios";
import { hostApi } from "config/environment";
import { Baber } from "model/util.model";

export const getAllBaber = async () => {
  const data = await axios.get(`${hostApi}/baberGetAll`);
  return data;
};

export const insertUpdateBarber = async ({ data }: { data: Baber[] }) => {
  const result = await axios.post(`${hostApi}/baberInsertUpdate`, { data });
  return result;
};

export const deleteBarberId = async ({ data }: { data: string[] }) => {
  const result = await axios.post(`${hostApi}/baberDeleteById`, { data });
  return result;
}
