import axios from "axios";
import { hostApi } from "config/environment";

export const getAllBaber = async () => {
  const data = await axios.get(hostApi);
  return data;
};
