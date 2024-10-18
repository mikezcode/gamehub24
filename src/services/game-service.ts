
import { Genre } from "./genre-service";
import createService from "./http-service";

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

  suggestions_count:number
  added:number
  rating:number
}
const gameService = createService<Game>('/games')
export default gameService;