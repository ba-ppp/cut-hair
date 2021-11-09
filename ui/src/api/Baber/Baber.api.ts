import axios from "axios";
import { hostApi, hostApiTest } from "config/environment";

export const getAllBaber = async () => {
  console.log(`REACT_APP_API_TEST`, process.env.REACT_APP_API_TEST)
  console.log(`hostApiTest`, hostApiTest())
  const data = await axios.get(`${'https://my-json-server.typicode.com/ba-p/demo/'}babers`);
  return data;
};
