import axios from "axios";
import { hostApi } from "config/environment";

export const getAllServiceItems = async () => {

  const data = await axios.get(`${hostApi}/serviceItemGetAll`);
  return data;
};
