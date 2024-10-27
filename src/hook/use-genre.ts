import { useQuery } from "@tanstack/react-query";
import genreData from "../data/genre-data";
import apiClient, { FetchDataResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient
        .get<FetchDataResponse<Genre>>("/genres")
        .then((res) => res.data);
    },
    staleTime: 24 * 3600 * 1000, // 24h
    initialData: { results: genreData, count: genreData.length },
  });

export default useGenre;
