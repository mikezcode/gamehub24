import { useEffect, useState } from "react";

import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchDataResponse<T> {
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchDataResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, err, isLoading };
};
export default useData;
