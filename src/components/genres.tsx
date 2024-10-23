import { Box, Heading, Link, Spinner, Text } from "@chakra-ui/react";

import useGenre, { Genre } from "../hook/use-genre";
import GenreComp from "./genre";

interface Props {
  handleSelectedGenre: (genre: Genre | null ) => void;
}

const Genres = ({ handleSelectedGenre }:Props) => {
  const { data, isLoading } = useGenre();
 
  if (isLoading) return <Spinner size="xl" color="green.300" />;
  else
    return (
      <Box>
        <Link _hover={{ textDecor: "none" }} onClick={()=>handleSelectedGenre(null)}>
          <Heading fontSize={"24px"} fontWeight={700} color={"white"} mb={4}>
            Genres
          </Heading>
        </Link>
        {data.map((genre) => (
          <GenreComp
            key={genre.id}
            genre={genre}
            handleClick={(genre) =>handleSelectedGenre(genre)}
          />
        ))}
      </Box>
    );
};

export default Genres;
