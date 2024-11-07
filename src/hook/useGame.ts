import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/apiClient"
import { Game } from "./useGames"
import ms from "ms"

interface GameDetail{
  id:number,
  description:string
  description_raw:string
  name:string
}
const useGame = (slug:string | undefined)=> {
  const apiClient = new ApiClient<GameDetail>(`/games/${slug}`)
  return useQuery({
  queryKey:['gameDetail' , slug],
  queryFn:  apiClient.get,
  staleTime:ms('24h')
})

}
export default useGame;