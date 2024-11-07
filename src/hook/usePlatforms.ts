import { useQuery } from "@tanstack/react-query";
import platformData from "../data/platformData";
import ApiClient from "../services/apiClient";
import ms from "ms";
import { Platform } from "../entities/Platform";
const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: platformData,
  });

export default usePlatforms;
