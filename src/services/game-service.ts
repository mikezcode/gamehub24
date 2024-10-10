import { useEffect, useState } from "react";
import apiClient from "./api-client";
import { Genre } from "./genre-service";

export interface Platform {
  platform: {
    id: number;
    image_background: string;
    name: string;
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  released: string;
  platforms: Platform[];
  suggestions_count:number
  added:number
}

interface Games{
  results:Game[]
}

const useGameService = ()=>{
 const [games, setGames] = useState<Game[]>([])
useEffect(()=>{
  const controller =  new AbortController ();
    apiClient
      .get<Games>("/games", { signal: controller.signal })
      .then(({data}) => {
        setGames(data.results);

      })
      .catch((err) => console.log(err));
    
},[])
 return games;
}
export default useGameService;