import { Box, Heading, Link, Spinner } from "@chakra-ui/react";
import Genre from "./genre";
import useGenre from "../hook/use-genre";

interface Props {
  handleGenre: (gType: string) => void;
}

const Genres = ({ handleGenre }: Props) => {
  const { genres, err,isLoading } = useGenre();

  const filterByGenre = (gType: string) => {
    handleGenre(gType);
  };
//  if (isLoading)  return <Spinner size="xl" color="green.300" />;
  return (
    <Box>
      <Link _hover={{ textDecor: "none" }} onClick={() => handleGenre("")}>
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
