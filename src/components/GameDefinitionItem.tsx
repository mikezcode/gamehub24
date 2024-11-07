import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const GameDefinitionItem = ({term,children}:Props) => {
  return (
    <Box>
      <Heading mb={1} fontSize={"2xl"} color={"gray.600"} as={"dt"}>
        {term}
      </Heading>
      {children}
    </Box>
  );
};

export default GameDefinitionItem;
