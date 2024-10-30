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
import SearchInput from "./searchInput";



const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  console.log('nav bar rendered');
  
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
          <SearchInput/>
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
            onToggle={()=> onToggle()}           
          />
        </VStack>
      </Collapse>
    </Box>
  );
};

export default NavBar;

