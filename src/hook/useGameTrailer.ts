import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import ApiClient from "../services/apiClient";

const useGameTrailer = (id?: number) =>
  {
  const apiClient = new ApiClient<Trailer>(`/games/${id}/movies`);  
  return useQuery({
    queryKey: ["gameTrailer", id],
    queryFn: apiClient.getAll,
  });
}
export default useGameTrailer;
