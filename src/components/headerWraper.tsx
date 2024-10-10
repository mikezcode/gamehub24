import {
  Box,
  Button,
  calc,
  Collapse,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Switch,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  HamburgerIcon,
  SearchIcon,
  CloseIcon,
} from "@chakra-ui/icons";

import React, { useRef, useState } from "react";
import { color, motion, wrap } from "framer-motion";
import Genres from "./genres";

const HeaderWraper = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  return (
    <Box>
      <Flex display={"flex"} align={"center"} m={2} flexWrap={"wrap"}>
        <HStack flexGrow={1} width={lgscreen ? "auto" : "100%"}>
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
            bg={"#3B3B3B"}
            borderRadius={"30px"}
            width={"100%"}
            flexGrow={1}
          >
            <InputLeftElement>
              <SearchIcon color={"#898989"} />
            </InputLeftElement>
            <Input
              bg={"#3B3B3B"}
              color={"#898989"}
              focusBorderColor="none"
              borderRadius={"30px"}
              _hover={{ background: "#FFF", color: "#222" }}
              _focus={{ background: "#FFF", color: "#222" }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              ref={inputRef}
            />
            <InputRightElement>
              <CloseIcon
                boxSize={lgscreen ? 3 : 2}
                color={"#181818"}
                cursor={"pointer"}
                onClick={() => {
                  setSearchInput("");
                  inputRef.current?.focus();
                }}
              />
            </InputRightElement>
          </InputGroup>
          <Switch colorScheme="green" />
          <HamburgerIcon
            cursor={"pointer"}
            boxSize={8}
            onClick={onToggle}
            display={lgscreen ? "none" : "inline-block"}
          />
        </HStack>
        <Box ml={"auto"}></Box>
      </Flex>
      <Collapse in={isOpen}>
        <VStack
          m={2}
          h={"90vh"}
          p={"2rem"}
          display={lgscreen ? "none" : "flex"}
          background={"#FFF"}
          color={"#000"}
          alignItems={'start'}
        >
          <Heading>Genres</Heading>
          <Box >
            <Genres />
          </Box>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default HeaderWraper;
