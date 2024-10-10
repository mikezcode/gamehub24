import {
  Flex,
  Avatar,
  Box,
  Badge,
  Text,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  url: string;
  title: string;
}

function Genre({ url, title }: Props) {
  return (
    <Link _hover={{ textDecoration: "none" }}>
      <HStack align={"center"} mb={2}>
        <Image
          borderColor={"none"}
          borderRadius={"6px"}
          src={url}
          boxSize={"32px"}
          objectFit={'cover'}
          
        />
        <Text fontWeight="500" textDecoration={"none"}>
          {title}
        </Text>
      </HStack>
    </Link>
  );
}

export default Genre;
