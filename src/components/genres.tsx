import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenres from "../hook/useGenres";
import useGameQueryStore from "../store";
interface Props {
  onToggle?: ()=> void
}

const Genres = ({onToggle}:Props) => {
  const { data, isLoading } = useGenres();
  const { gameQuery, setGenreId } = useGameQueryStore();
  if (isLoading) return <Spinner size="xl" color="green.300" />;
  // else
  return (
    <Box>
      <Link onClick={() => setGenreId()}>
        <Heading fontSize={"24px"} fontWeight={700} color={"white"} mb={4}>
          Genres
        </Heading>
      </Link>
      {data.results?.map((genre) => (
        <Link onClick={() =>{
           setGenreId(genre.id)
            if(onToggle) onToggle()         
          } 
          }
           key={genre.id}>
          <HStack align={"center"} mb={3}>
            <Image
              borderColor={"none"}
              borderRadius={"6px"}
              src={genre.image_background}
              boxSize={"32px"}
              objectFit={"cover"}
            />
            <Text
              color={genre.id === gameQuery.genreId ? "green.200" : "inherit"}
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
