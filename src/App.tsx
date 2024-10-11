import "./App.css";

import HeaderWraper from "./components/headerWraper";
import useGameService from "./services/game-service";

import GameGrid from "./components/game-grid";
import {
  Box,
  Container,
  HStack,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import GameListControl from "./components/game-list-control";
function App() {
  const games = useGameService();
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  const handleOrderBy = (option: string) => {
    console.log(option);
  };

  return (
    <>
      <HeaderWraper />
      <HStack width={"50rem"} mx={"auto"}>
        <Box alignSelf={"start"}>
          <GameListControl
            handleOrderBy={handleOrderBy}
            handlePlatform={(l) => console.log(l)}
          />
        </Box>

        {/* <GameGrid games={games} /> */}
      </HStack>
    </>
  );
}

export default App;
