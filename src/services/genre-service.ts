import createService from "./http-service";

 export interface Genre {
  id:number
  name: string;
  image_background: string;
}
const genreService = createService<Genre>("/genres")
export default genreService;
