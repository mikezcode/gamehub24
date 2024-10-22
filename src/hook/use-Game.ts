import { AxiosRequestConfig } from "axios";
import useData from "./use-Data";
import { Genre } from "./use-genre";

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
}

const useGame = (
  selectedGenre?: Genre | null,
  selectedPlatform?: Platform | null
) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};
export default useGame;
