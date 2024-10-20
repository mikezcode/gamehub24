
import useData from "./use-Data";
import { Genre } from "./use-genre";

export interface Platform {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  released: string;
  parent_platforms: Platform[];

  suggestions_count: number;
  added: number;
  rating: number;
}

const useGame = () => useData<Game>("/games");
export default useGame;
