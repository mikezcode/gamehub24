import "./App.css";

import HeaderWraper from "./components/headerWraper";
import useGameService from "./services/game-service";

import GameGrid from "./components/game-grid";
import {
  Box,
  Container,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import GameListoOrderControl from "./components/game-list-order-control";
function App() {
  const games = useGameService();
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  const handleOrderBy = (option: string) => {
    console.log(option);
  };

  return (
    <>
      <HeaderWraper />
      <Box width={"auto"} mx={"auto"}>
        <GameListoOrderControl handleOrderBy={handleOrderBy} />
        {/* <GameGrid games={games} /> */}
      </Box>
    </>
  );
}

export default App;
