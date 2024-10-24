import {
  Box,
  Collapse,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Show,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";

import { ReactNode, useRef, useState } from "react";
import SearchInput from "./search-input";

interface Props {
  children: ReactNode;
  onGameSearch: (searchText: string) => void;
}

const SearchBar = ({ children,onGameSearch}: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode(); 

  return (
    <Box p={"24px 15px"}>
      <Flex display={"flex"} align={"center"} m={2} flexWrap={"wrap"}>
        <HStack flexGrow={1} width={{ base: "100%", lg: "auto" }}>
          <Link
            href="#"
            fontSize={"2xl"}
            fontWeight={700}
            _hover={{ textDecoration: "none" }}
          >
            RAWG
          </Link>
          <SearchInput onGameSearch={onGameSearch}/>
          <Switch colorScheme="green" onChange={toggleColorMode} />
          <Show below="lg">
            <HamburgerIcon cursor={"pointer"} boxSize={8} onClick={onToggle} />
          </Show>
        </HStack>
        <Box ml={"auto"}></Box>
      </Flex>
      <Collapse in={isOpen}>
        <VStack
          m={2}
          p={"2rem"}
          transition={"1s ease-in all"}
          alignItems={"start"}
        >
          {children}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default SearchBar;
