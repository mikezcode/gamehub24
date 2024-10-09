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

const Genres = () => {
  return (
    <Box mx={2}>
      <Heading fontSize={"24px"} fontWeight={700} color={"white"}>
        Genres
      </Heading>
      <Genre url="https://bit.ly/dan-abramov" title="Action" />
    </Box>
  );
};

export default Genres;
