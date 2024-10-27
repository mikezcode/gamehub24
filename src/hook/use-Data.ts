import { useEffect, useState } from "react";

import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface FetchDataResponse<T> {
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig,deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchDataResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then(({ data }) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, deps?[...deps]:[]);

  return { data, err, isLoading };
};
export default useData;
