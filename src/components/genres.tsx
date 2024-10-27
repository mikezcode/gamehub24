import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenre, { Genre } from "../hook/use-genre";
interface Props {
  handleSelectedGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const Genres = ({ handleSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenre();

  // if (isLoading) return <Spinner size="xl" color="green.300" />;
  // else
    return (
      <Box>
        <Link onClick={() => handleSelectedGenre(null)}>
          <Heading fontSize={"24px"} fontWeight={700} color={"white"} mb={4}>
            Genres
          </Heading>
        </Link>
        { data.results?.map((genre) => (
          <Link onClick={() => handleSelectedGenre(genre)} key={genre.id}>
            <HStack align={"center"} mb={3}>
              <Image
                borderColor={"none"}
                borderRadius={"6px"}
                src={genre.image_background}
                boxSize={"32px"}
                objectFit={"cover"}
              />
              <Text
                color={genre.id === selectedGenre?.id ? "green.200" : "inherit"}
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
