import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient from "../services/api-client";
import { Genre } from "./use-genre";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  released: string;
  parent_platforms: { platform: Platform }[];

  suggestions_count: number;
  added: number;
  rating: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 3600 * 1000,
  });
};
export default useGame;
