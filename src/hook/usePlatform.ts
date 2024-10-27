import { useQuery } from "@tanstack/react-query";
import platformData from "../data/platformData";
import useData, { FetchDataResponse } from "./use-Data";
import { Platform } from "./use-Game";
import apiClient from "../services/api-client";

// const usePlatform = ( )=> useData<Platform>('/platforms/lists/parents')
const usePlatform = ()=> ({data:{results:platformData},isLoading:false, error:null})


export default usePlatform;
