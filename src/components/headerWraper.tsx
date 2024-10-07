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
  useDisclosure,
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

import React, { useState } from "react";
import { color } from "framer-motion";

const HeaderWraper = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [searchInput, setSearchInput] = useState('')

  return (
    <Box>
      <Flex
        display={"flex"}
        align={"center"}
        p={"24px 40px"}
        justify={"space-between"}
        flexWrap={"wrap"}
      >
        <Link
          href="#"
          fontSize={"xl"}
          fontWeight={700}
          _hover={{ textDecoration: "none" }}
        >
          RAWG
        </Link>
        <InputGroup mx={4} bg={"#3B3B3B"} maxW={"70vw"} borderRadius={"30px"}>
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
          />
          <InputRightElement>
            <CloseIcon
              color={"#898989"}
              cursor={"pointer"}
              onClick={() => {
                setSearchInput("")       
              
              }}
            />
          </InputRightElement>
        </InputGroup>

        <HamburgerIcon cursor={"pointer"} boxSize={8} onClick={onToggle} />
        <Collapse in={isOpen} animateOpacity>
          <Switch />
        </Collapse>
      </Flex>
    </Box>
  );
};

export default HeaderWraper;
