import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Link,
  Show,
  Switch,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import useGameQueryStore from "../store";
import Genres from "./genres";
import SearchInput from "./searchInput";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode();
   const setGenreId = useGameQueryStore((s) => s.setGenreId);
   const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);


  return (
    <Box p={"24px 15px"}>
      <Flex display={"flex"} align={"center"} m={2} flexWrap={"wrap"}>
        <HStack flexGrow={1} width={{ base: "100%", lg: "auto" }}>
          <Link
            href="#"
            fontSize={"2xl"}
            fontWeight={700}
            _hover={{ textDecoration: "none" }}
            onClick={() => {
              setSearchText("");
              setGenreId();
              setPlatformId();
              setSortOrder("");
            }}
          >
            RAWG
          </Link>
          <SearchInput />
          <Show below="lg">
            <HamburgerIcon cursor={"pointer"} boxSize={8} onClick={onToggle} />
          </Show>
          <Show above="lg">
            <Switch
              colorScheme="green"
              onChange={toggleColorMode}
              alignSelf={"center"}
              ml={3}
            />
          </Show>
        </HStack>
      </Flex>
      <Collapse in={isOpen}>
        <HStack alignItems={"center"} m={2} p={"2rem"}>
          <Switch
            colorScheme="green"
            onChange={toggleColorMode}
            alignSelf={"center"}
            mr={5}
          />
          <Text> Dark Mode</Text>
        </HStack>
        <VStack
          m={2}
          paddingInline={"2rem"}
          transition={"1s ease-in all"}
          alignItems={"start"}
        >
          <Show below="lg">
            <Genres onToggle={() => onToggle()} />
          </Show>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default NavBar;

