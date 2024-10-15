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
import { useState } from "react";
function App() {
  const { games, isLoading, setGames, err } = useGameService();
  // const [filteredGame, setFilteredGame] = useState(games);
  const [genre, setGenre] = useState("");
  const [lgscreen] = useMediaQuery("(min-width: 978px)"); 

  const filteredGame = genre
    ? games.filter((game) => {
        return game.genres.filter((g) => g.name === genre).length > 0;
      })
    : games;

  return (
    <>
      <HeaderWraper>
        <Genres handleGenre={setGenre} />
      </HeaderWraper>
      <SimpleGrid
        columns={lgscreen ? 2 : 1}
        templateColumns={lgscreen ? "200px 1fr" : "1fr"}
        px={"15px"}
      >
        {lgscreen ? (
          <Genres
            handleGenre={(gType) => {
              setGenre(gType);
            }}
          />
        ) : (
          <></>
        )}
        <SimpleGrid templateRows={"auto auto"} ml={0} alignContent={"start"}>
          <Box>
            <Heading fontSize={"5xl"} textAlign={lgscreen ? "left" : "center"}>
              {genre || "All"} Games
            </Heading>

            <GameListControl
              handleOrderBy={(e) => console.log(e)}
              handlePlatform={(e) => console.log(e)}
            />
            {filteredGame.length === 0 && (
              <Heading mt={10}>
                {isLoading ? "Loadding ..." : "No game available ..."}
              </Heading>
            )}
          </Box>
          {filteredGame.length !== 0 && <GameGrid games={filteredGame} />}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default App;
