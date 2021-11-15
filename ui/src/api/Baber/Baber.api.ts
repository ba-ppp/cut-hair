import axios from "axios";
import { hostApi, hostApiTest } from "config/environment";

export const getAllBaber = async () => {

  const data = await axios.get(`${hostApi}api/baberGetAll`);
  return data;
};
