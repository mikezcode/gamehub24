import { useQuery } from "@tanstack/react-query";
import genreData from "../data/genre-data";
import apiClient from "../services/api-client";
import useData, { FetchDataResponse } from "./use-Data";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// const useGenre = () => useData<Genre>("/genres");
// const useGenre = () => ({ data: {results:genreData}, isLoading: false, err: null });

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"], 
    queryFn: () => {
      return apiClient
        .get<FetchDataResponse<Genre>>("/genres")
        .then((res) => res.data);
    },
    staleTime: 24 * 3600 * 1000,   // 24h
    initialData: {results:genreData},
  });
};

export default useGenre;
