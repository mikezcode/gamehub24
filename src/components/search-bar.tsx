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

interface Props {
  children: ReactNode;
  onGameSearch: (searchText: string) => void;
}


const SearchBar = ({ children, onGameSearch }: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#D1D2D5", "#2D3748");
  const [searchInput, setSearchInput] = useState("");

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
          <InputGroup
            mx={4}
            bg={bg}
            borderRadius={"30px"}
            width={"100%"}
            flexGrow={1}
            outlineOffset={"0px"}
            boxShadow={"lg"}
          >
            <InputLeftElement>
              <SearchIcon color={"#181818"} />
            </InputLeftElement>
            <Input
              bg={bg}
              color={"#898989"}
              borderRadius={"30px"}
              border={"none"}
              outline={"none"}
              _hover={{
                background: "#F2F2F2",
                color: "#222",
                outline: "none",
              }}
              _focus={{
                background: "#F2F2F2",
                color: "#222",
                outline: "none",
                outlineOffset: "0px",
                outlineColor: "#f2f2f2",
                border: "none",
                overflow: "hidden",
              }}
              value={searchInput}
              onChange={(e) => {
                onGameSearch(e.target.value);
                setSearchInput(e.target.value);
              }}
              ref={inputRef}
            />
            <InputRightElement>
              <CloseIcon
                color={"#181818"}
                cursor={"pointer"}
                onClick={() => {
                  setSearchInput("");
                  onGameSearch("");
                }}
              />
            </InputRightElement>
          </InputGroup>
          <Switch colorScheme="green" onChange={toggleColorMode} />
          <Show below="lg">
            <HamburgerIcon
              cursor={"pointer"}
              boxSize={8}
              onClick={onToggle}
            />
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
