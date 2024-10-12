import "./App.css";
import HeaderWraper from "./components/headerWraper";


import {
  Box,
  HStack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import GameListControl from "./components/game-list-control";
import useGameService from "./hook/useGameService";
import GameGrid from "./components/game-grid";
function App() {
  const {games} =useGameService()
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

 

  return (
    <>
      <HeaderWraper />
      <GameGrid games={games}/>
    </>
  );
}

export default App;
