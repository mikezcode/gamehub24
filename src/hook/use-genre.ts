import { useQuery } from "@tanstack/react-query";
import genreData from "../data/genre-data";
import ApiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new ApiClient<Genre>('/genres')

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 3600 * 1000, // 24h
    initialData: { results: genreData, count: genreData.length },
  });

export default useGenre;
