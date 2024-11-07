import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import  Game  from "../entities/Game";
import ms from "ms";

const apiClient = new ApiClient<Game>("games");
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};
export default useGame;
