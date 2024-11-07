import { Genre } from "./Genre";
import { Platform } from "./Platform";

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
  description_raw: string;
}
