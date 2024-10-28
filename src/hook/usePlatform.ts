import { useQuery } from "@tanstack/react-query";
import platformData from "../data/platformData";
import ApiClient from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 3600 * 1000, //24h
    initialData: { results: platformData, count: platformData.length },
  });

export default usePlatform;
