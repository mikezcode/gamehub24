import { Box, Heading } from "@chakra-ui/react";
import Genre from "./genre";
import useGenreService from "../hook/useGenreService";

const Genres = () => {
  const { genres, err } = useGenreService();

  return (
    <Box mx={2}>
      <Heading fontSize={"24px"} fontWeight={700} color={"white"} mb={2}>
        Genres
      </Heading>
      {genres.map((genre) => (
        <Genre key={genre.id} url={genre.image_background} title={genre.name} />
      ))}
    </Box>
  );
};

export default Genres;
