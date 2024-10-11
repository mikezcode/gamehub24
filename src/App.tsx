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
function App() {
  const games = useGameService();
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

 

  return (
    <>
      <HeaderWraper />
      <HStack width={"50rem"} mx={"auto"}>
        <Box alignSelf={"start"}>
          <GameListControl
            handleOrderBy={o=>console.log(o)
            }
            handlePlatform={(l) => console.log(l)}
          />
        </Box>

        {/* <GameGrid games={games} /> */}
      </HStack>
    </>
  );
}

export default App;
