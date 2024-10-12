import { useEffect, useState } from "react";

import gameService, { Game } from "../services/game-service";



const useGameService = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    const { req, cancel } = gameService.getAll();
    req
      .then(({ data }) => {
        setGames(data.results);
        setIsLoading(false)
      })
      .catch((err) => {
          setErr(err)
          setIsLoading(false)
      });
    return () => cancel();
  }, []);
  return {games,err,isLoading};
};
export default useGameService;
