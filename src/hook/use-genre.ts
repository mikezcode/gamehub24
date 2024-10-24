import genreData from "../data/genre-data";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// const useGenre = () => useData<Genre>("/genres");
const useGenre = () => ({data:genreData,isLoading:false,err:null});

export default useGenre
