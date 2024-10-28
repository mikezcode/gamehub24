import { useQuery } from "@tanstack/react-query";
import platformData from "../data/platformData";
import ApiClient from "../services/apiClient";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 3600 * 1000, //24h
    initialData: { results: platformData, count: platformData.length,next:"" },
  });

export default usePlatforms
