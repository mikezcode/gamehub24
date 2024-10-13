import "./App.css";
import HeaderWraper from "./components/headerWraper";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import GameListControl from "./components/game-list-control";
import useGameService from "./hook/useGameService";
import GameGrid from "./components/game-grid";
import Genres from "./components/genres";
function App() {
  const { games } = useGameService();
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  return (
    <>
      <HeaderWraper />
      <SimpleGrid
        columns={lgscreen ? 2 : 1}
        templateColumns={lgscreen ? "200px 1fr" : "1fr"}
        px={"15px"}
      >
        {lgscreen ? <Genres /> : <></>}
        <SimpleGrid templateRows={"auto auto"}
        ml={0}
        alignItems={'start'}
        >
          <Box>
            <Heading fontSize={"5xl"} textAlign={lgscreen ? "left" : "center"}>
              {" "}
              Games
            </Heading>
            
              <GameListControl
                handleOrderBy={(e) => console.log(e)}
                handlePlatform={(e) => console.log(e)}
              />
           
          </Box>
          <GameGrid games={games} />
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default App;
