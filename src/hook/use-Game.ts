import {
  InfiniteData,
  keepPreviousData,
  QueryKey,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchDataResponse } from "../services/api-client";
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
const pageSize = 3;

const useGame = (gameQuery: GameQuery) => {
  return useInfiniteQuery<
    FetchDataResponse<Game>,
    Error,
    InfiniteData<FetchDataResponse<Game>, number>,
    QueryKey,
    number
  >({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    // placeholderData: keepPreviousData,
    initialPageParam: 1,
    staleTime: 24 * 3600 * 1000,
  });
};
export default useGame;
