import { useQuery } from "@tanstack/react-query";
import genreData from "../data/genreData";
import ApiClient from "../services/apiClient";
import ms from "ms";
import  Genre  from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: genreData,
  });

export default useGenres;
