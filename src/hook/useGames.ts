import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import ms from "ms";
import ApiClient, { FetchDataResponse } from "../services/apiClient";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
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
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
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
    staleTime: ms("24h"),
  });
};
export default useGames;
