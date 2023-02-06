import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import type { ErrorResponse } from "./types";
import { MessagePlugin } from "tdesign-vue-next";
import { useAppStore } from "@/store";

const BASE_URL_NODE: string = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL_NODE,
  timeout: 60000,
});

const tokenPrefix = "BEarer";

//请求拦截
instance.interceptors.request.use(
  (config: any) => {
    if (config.url !== "/login") {
      const token: RegExpMatchArray | null | undefined = localStorage
        .getItem("counter")
        ?.match(/:"(\S*)",/);
      //请求头携带token
      config.headers.Authorization = token && token[1];
    }
    return config;
  },
  (_error) => {
    return Promise.reject("请求出错");
  }
);

instance.interceptors.request.use((request: any) => {
  const appStore = useAppStore();
  if (appStore.token && request.headers) {
    request.headers["Authorization"] = tokenPrefix + appStore.token;
  }
  return request;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError<ErrorResponse>) => {
    const responseData: ErrorResponse | undefined = error.response?.data;
    responseData && (await MessagePlugin.error(responseData?.msg));

    if (error.response?.status === 400 || error.response?.status === 403) {
      const appStore = useAppStore();
      appStore.logout();
    }

    return Promise.reject(error);
  }
);

export default instance;
