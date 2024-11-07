import { Badge, Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";
import { Children, ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const GameAttributes = ({ term,children}: Props) => {
  return (
    <Box>
      <Heading mb={1} fontSize={"2xl"} color={"gray.600"} as={'dt'}>
        {term}
      </Heading>
      {children}
    </Box>
  );
};

export default GameAttributes;
