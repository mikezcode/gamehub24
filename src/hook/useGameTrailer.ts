import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchDataResponse } from "../services/apiClient";
import { Trailer } from "../entities/Trailer";
import ms from "ms";


const useGameTrailer = (id?: number) =>
  {
  const apiClient = new ApiClient<Trailer>(`/games/${id}/movies`);  
  return useQuery({
    queryKey: ["gameTrailer", id],
    queryFn: apiClient.getAll,
  });
}
export default useGameTrailer;
