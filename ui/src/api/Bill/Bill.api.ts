import axios from "axios";
import { hostApi } from "config/environment";
import { Customer } from 'model/util.model';

type billData = {
  idBill: string;
  customer: Customer;
  idBarber: string;
  idSelectedProducts: string[];
  idSelectedServices: string[];
};

export const insertBill = async (data: billData) => {
  const response = await axios.post(`${hostApi}/billInsertUpdate`, data);
  return response;
};
