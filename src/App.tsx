import "./App.css";

import HeaderWraper from "./components/headerWraper";
import useGameService from "./services/game-service";

import GameGrid from "./components/game-grid";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
function App() {
  const games = useGameService();
  console.log(games);
    // const bg = useColorModeValue("#F2f2f2", "#1A202C");
  return (
    <>
      <HeaderWraper />
      <GameGrid games={games} />
   
    </>
  );
}

export default App;
