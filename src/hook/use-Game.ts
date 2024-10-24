import { AxiosRequestConfig } from "axios";
import useData from "./use-Data";
import { Genre } from "./use-genre";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

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
  rating_top:number
}

const useGame = (gameQuery: GameQuery) => {

  
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search:gameQuery.searchText
      },
    },
    [gameQuery]
  );
};
export default useGame;
