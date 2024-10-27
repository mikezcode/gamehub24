import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchDataResponse } from "../services/api-client";
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

const useGame = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get<FetchDataResponse<Game>>("games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data);
    },
    staleTime: 24 * 3600 * 1000,
  });

export default useGame;
