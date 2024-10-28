import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Link,
  Show,
  Switch,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import Genres from "./genres";
import SearchInput from "./search-input";

interface Props {
  // children: ReactNode;
  onGameSearch: (searchText: string) => void;
  handleSelectedGenre: (genreId?: number) => void;
  selectedGenreId?: number;
}

const NavBar = ({
  onGameSearch,
  handleSelectedGenre,
  selectedGenreId,
}: Props) => {
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
          <SearchInput onGameSearch={onGameSearch} />
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
          <Genres
            handleSelectedGenre={(genre) => {
              handleSelectedGenre(genre);
              onToggle();
            }}
            selectedGenreId={selectedGenreId}
          />
        </VStack>
      </Collapse>
    </Box>
  );
};

export default NavBar;
