import "./App.css";
import HeaderWraper from "./components/headerWraper";
import useGameService from "./services/game-service";

import {
  Box,
  HStack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import GameListControl from "./components/game-list-control";
import GameGrid from "./components/game-grid";
function App() {
  const games = useGameService();
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

 

  return (
    <>
      <HeaderWraper />
     
          <GameListControl
            handleOrderBy={o=> console.log(o)
            }
            handlePlatform={(l) => console.log(l)}
          />
 

    </>
  );
}

export default App;
