import { useQuery } from "@tanstack/react-query";
import genreData from "../data/genreData";
import ApiClient from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new ApiClient<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 3600 * 1000, // 24h
    initialData: { results: genreData, count: genreData.length,next:"" },
  });

export default useGenre;
