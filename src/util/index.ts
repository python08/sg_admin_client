import axios, { AxiosResponse } from "axios";

export const checkError = (message: any) =>
  typeof message === "string" ? message : "";

export const apiSuccess = (responseStatus: number) =>
  responseStatus >= 200 && responseStatus <= 299;
export const apiClientError = (responseStatus: number) =>
  responseStatus >= 400 && responseStatus <= 499;
export const apiServerError = (responseStatus: number) =>
  responseStatus >= 500 && responseStatus <= 599;

export type ResponseType = {
  data: any;
  error: any;
  status: number;
};

export const checkResponse = async (
  res: AxiosResponse<any, any> | null
): Promise<ResponseType> => {
  if (res) {
    const responseStatus = res.status;
    // success
    if (apiSuccess(responseStatus)) {
      return {
        data: res.data,
        error: null,
        status: responseStatus,
      };
      // client error
    } else if (apiClientError(responseStatus)) {
      return {
        data: null,
        error: res.data,
        status: responseStatus,
      };
      // server error
    } else if (apiServerError(responseStatus)) {
      return {
        data: null,
        error: res.data,
        status: responseStatus,
      };
    }
  }
  // default
  return {
    data: null,
    error: null,
    status: -1,
  };
};

export const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => res.data);

export function hasNumber(myString: string) {
  return /\d/.test(myString);
}

export const splitBrief: any = (brief: string) => {
  const details: any = {};
  brief.split("*").forEach((brief, index) => {
    details[`brief${index + 1}`] = brief;
  });
  return details;
};

export const getCombinedString = (data: any) => {
  const { brief1, brief2, brief3, brief4 } = data;
  return `${brief1}*${brief2}*${brief3}*${brief4}`;
};

/**
 * Function to append key-value pairs of an object to FormData
 * @param {Record<string, any>} data - The object containing key-value pairs to append
 * @param {FormData} [formData] - The FormData object to append to (optional)
 * @param {string} [parentKey] - The parent key for nested objects (optional)
 * @returns {FormData} - The FormData object with appended key-value pairs
 */
export function objectToFormData(
  data: Record<string, any>,
  formData: FormData = new FormData(),
  parentKey?: string
): FormData {
  Object.keys(data).forEach((key) => {
    const value = data[key];
    const formKey = parentKey ? `${parentKey}[${key}]` : key;

    if (value instanceof Date) {
      formData.append(formKey, value.toISOString());
    } else if (value instanceof File) {
      formData.append(formKey, value);
    } else if (Array.isArray(value)) {
      value.forEach((element, index) => {
        const arrayKey = `${formKey}[${index}]`;
        objectToFormData({ [arrayKey]: element }, formData);
      });
    } else if (typeof value === "object" && value !== null) {
      objectToFormData(value, formData, formKey);
    } else {
      formData.append(formKey, value);
    }
  });

  return formData;
}

export const setObjToStorage = (obj: any, keyName: string): void => {
  localStorage.setItem(keyName, JSON.stringify(obj));
};

export const getObjFromLocalStorage = (keyName: string): object => {
  const retrievedObject = localStorage.getItem(keyName);
  return JSON.parse(retrievedObject);
};
