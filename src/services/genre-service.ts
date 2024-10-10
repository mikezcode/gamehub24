import { useEffect, useState } from "react";
import apiClient from "./api-client";

 export interface Genre {
  id:number
  name: string;
  image_background: string;
}
interface Genres {
  results: Genre[];
}

const useGenreService = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Genres>("/genres", { signal: controller.signal })
      .then(({ data }) => {
        setGenres(data.results);
      })
      .catch((err: { name: string }) => {
        if (err.name !== "CanceledError") setErr(err.name);
      });

    return () => controller.abort();
  }, []);

  return { genres, err };
};
export default useGenreService;
