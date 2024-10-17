import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genre-service";
import { tr } from "framer-motion/client";
import { CanceledError } from "axios";

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const { req, cancel } = genreService.getAll();
    req
      .then(({ data }) => {
        setGenres(data.results);
        setIsLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setErr(err.name);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { genres, err, isLoading };
};
export default useGenre;
