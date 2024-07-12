import { checkResponse } from "@/util";
import axios, { AxiosResponse } from "axios";

type MethodType = {
  PUT: string;
  POST: string;
  DELETE: string;
  GET: string;
};

export type ApiMethod = keyof MethodType;

const api = async (
  route: string,
  method: ApiMethod,
  data?: any,
  config?: object
) => {
  let res: AxiosResponse | null = null;
  const url = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/${route}`;
  try {
    switch (method) {
      case "POST":
        res = await axios.post(url, data, config);
        break;
      case "PUT":
        res = await axios.put(url, data, config);
        break;
      case "GET":
        res = await axios.get(url, config);
        break;
      case "DELETE":
        res = await axios.delete(url, config);
        break;
    }
  } catch (error: any) {
    // if error extract response object form axios error obj
    res = error.response;
  }

  const respData = await checkResponse(res);

  return respData;
};

export default api;

export const apiOptions = {
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
