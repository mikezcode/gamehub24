import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  released: string;
  parent_platforms: { platform: Platform }[];
  slug: string;
  suggestions_count: number;
  added: number;
  rating: number;
  rating_top: number;
  metacritic:number;
  publishers:Publisher[]
  description_raw: string;
}
