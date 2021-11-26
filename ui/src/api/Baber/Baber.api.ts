import axios from "axios";
import { hostApi } from "config/environment";
import { Baber } from 'model/util.model';

export const getAllBaber = async () => {
  const data = await axios.get(`${hostApi}/baberGetAll`);
  return data;
};

export const insertUpdateBarber = async (data: Baber) => {
  const result = await axios.post(`${hostApi}/baberInsertUpdate`, data);
  return result;
}
