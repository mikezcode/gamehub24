import { Box, Heading, Link } from "@chakra-ui/react";
import Genre from "./genre";
import useGenreService from "../hook/useGenreService";

interface Props{
  handleGenre: (gType:string)=> void
}

const Genres = ({handleGenre}:Props) => {
  const { genres, err} = useGenreService();

  const filterByGenre = (gType: string)=> {
    handleGenre(gType)  
  }

  return (
    <Box >
      <Link _hover={{ textDecor: "none" }} onClick={() => handleGenre("")} >
        <Heading fontSize={"24px"} fontWeight={700} color={"white"} mb={4}>
          Genres
        </Heading>
      </Link>
      {genres.map((genre) => (
        <Genre
          key={genre.id}
          url={genre.image_background}
          title={genre.name}
          handleGenre={(gType) => filterByGenre(gType)}
        />
      ))}
    </Box>
  );
};

export default Genres;
