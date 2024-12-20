import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  next: string | null
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: " https://api.rawg.io/api",
  params: {
    key: "0b7c68ef6f5f442bb4c1c702b74eaae3",
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (axiosReqConfig?:AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint , axiosReqConfig)
      .then((res) => res.data);
  };
  get = (slug:string |number) => {
    return axiosInstance
      .get<T>(this.endpoint+'/'+slug)
      .then((res) => res.data);
  };
}

export default ApiClient;
