import {
  AvatarBadge,
  Badge,
  Box,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Genre from "./genre";
import useGenreService from "../services/genre-service";

const Genres = () => {
  const { genres, err } = useGenreService();

  return (
    <Box mx={2}>
      <Heading fontSize={"24px"} fontWeight={700} color={"white"}>
        Genres
      </Heading>
      {genres.map((genre) => (
        <Genre key={genre.id} url={genre.image_background} title={genre.name} />
      ))}
    </Box>
  );
};

export default Genres;
