import { Text, HStack, Image, Link } from "@chakra-ui/react";
import { Genre } from "../hook/use-genre";
import { useState } from "react";


interface Props { 
  handleClick: (g:Genre) => void;
  genre:Genre
}

function GenreComp({ handleClick,genre }: Props) {
 
  
  return (
    <Link onClick={()=>handleClick(genre)}>
      <HStack align={"center"} mb={3}>
        <Image
          borderColor={"none"}
          borderRadius={"6px"}
          src={genre.image_background}
          boxSize={"32px"}
          objectFit={"cover"}
        />
        <Text fontWeight="500" textDecoration={"none"}>
          {genre.name}
        </Text>
      </HStack>
    </Link>
  );
}

export default GenreComp;
