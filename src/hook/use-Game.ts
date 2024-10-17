import { useEffect, useState } from "react";

import gameService, { Game } from "../services/game-service";
import { CanceledError } from "axios";

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const { req, cancel } = gameService.getAll();
    req
      .then(({ data }) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });
    return () => cancel();
  }, []);

  return { games, setGames, err, isLoading };
};
export default useGame;
