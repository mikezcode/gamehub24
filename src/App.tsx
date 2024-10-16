import "./App.css";
import HeaderWraper from "./components/headerWraper";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import GameListControl from "./components/game-list-control";
import useGameService from "./hook/useGameService";
import GameGrid from "./components/game-grid";
import Genres from "./components/genres";
import { Game } from "./services/game-service";
import { useEffect, useState } from "react";
function App() {
  const { games, isLoading, setGames, err } = useGameService();

  const [filteredGame, setFilteredGame] = useState<Game[]>([]);
  // useEffect(() => {
  //   setFilteredGame([...games]);
  // }, []);

  const [genre, setGenre] = useState("");
  const [label, setLabel] = useState("Popularity");
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  useEffect(() => {
    setFilteredGame(
      genre
        ? games.filter((game) => {
            return game.genres.filter((g) => g.name === genre).length > 0;
          })
        : games
    );
  }, [genre]);

  const filteredByOrder = (orderBy: string) => {
   setLabel((l) => orderBy);
    switch (orderBy) {
      case "Name":
        setFilteredGame(
          filteredGame.sort((g1, g2) => g1.name.localeCompare(g2.name))
        );
        break;
      case "Popularity":
        setFilteredGame(filteredGame.sort((g1, g2) => g2.added - g1.added));
        break;

      case "Average rating":
        setFilteredGame(filteredGame.sort((g1, g2) => g2.rating - g1.rating));
        break;
    }
 
  };

  useEffect(() => {
    setFilteredGame([...games]);
  }, [isLoading]);

//  const handleResetOrder = (isReset:boolean)=>{
//   console.log('called',isReset);
  
//    return isReset;
//  }


  return (
    <>
      <HeaderWraper>
        <Genres
          handleGenre={(g) => {
            setGenre(g);
            // handleResetOrder(true)
            // filteredByGenre(g);
          }}
        />
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
              handleOrderBy={(orderBy) => filteredByOrder(orderBy)}
              handlePlatform={(e) => console.log(e)}
              // resetToDefault = {handleResetOrder(false)}
            />
            {filteredGame.length === 0 && (
              <Heading mt={10}>
                {isLoading ? (
                  <Spinner size="xl" color="green.300" />
                ) : (
                  "No game available ..."
                )}
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
