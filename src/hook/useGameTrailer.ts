import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchDataResponse } from "../services/apiClient";
import { Trailer } from "../entities/Trailer";
import ms from "ms";

const apiClient = new ApiClient<FetchDataResponse<Trailer>>("/games");

const useGameTrailer = (id?: number) =>
  useQuery({
    queryKey: ["gameTrailer", id],
    queryFn: () => apiClient.get(`${id}/movies`),
  });
export default useGameTrailer;
