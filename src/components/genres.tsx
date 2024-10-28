import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenre from "../hook/useGenres";
interface Props {
  handleSelectedGenre: (genre?: number) => void;
  selectedGenreId: number | undefined;
}

const Genres = ({
  handleSelectedGenre,
  selectedGenreId: selectedGenre,
}: Props) => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner size="xl" color="green.300" />;
  // else
  return (
    <Box>
      <Link onClick={() => handleSelectedGenre()}>
        <Heading fontSize={"24px"} fontWeight={700} color={"white"} mb={4}>
          Genres
        </Heading>
      </Link>
      {data.results?.map((genre) => (
        <Link onClick={() => handleSelectedGenre(genre.id)} key={genre.id}>
          <HStack align={"center"} mb={3}>
            <Image
              borderColor={"none"}
              borderRadius={"6px"}
              src={genre.image_background}
              boxSize={"32px"}
              objectFit={"cover"}
            />
            <Text
              color={genre.id === selectedGenre ? "green.200" : "inherit"}
              textDecoration={"none"}
              fontWeight={"500"}
            >
              {genre.name}
            </Text>
          </HStack>
        </Link>
      ))}
    </Box>
  );
};

export default Genres;
