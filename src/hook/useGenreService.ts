import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genre-service";
import { tr } from "framer-motion/client";

const useGenreService = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const { req, cancel } = genreService.getAll();
    req
      .then(({ data }) => {
        setGenres(data.results);
        setIsLoading(false)
      })
      .catch((err: { name: string }) => {
        if (err.name !== "CanceledError") setErr(err.name);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { genres, err,isLoading };
};
export default useGenreService;
