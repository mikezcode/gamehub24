import { useQuery } from "@tanstack/react-query";
import platformData from "../data/platformData";
import apiClient, { FetchDataResponse } from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
// const usePlatform = ( )=> useData<Platform>('/platforms/lists/parents')
// const usePlatform = ()=> ({data:{results:platformData},isLoading:false, error:null})
const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 3600 * 1000, //24h
    initialData: { results: platformData, count: platformData.length },
  });

export default usePlatform;
