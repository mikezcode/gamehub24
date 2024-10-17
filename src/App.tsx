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

  const [genre, setGenre] = useState("");
  const [orderBy, setOrderBy] = useState("Popularity");
  const [platform, setPlatform] = useState("");
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  const filteredGame = genre
    ? games
        .filter((game) => {
          return game.genres.filter((g) => g.name === genre).length > 0;
        })
        : games;
    

       filteredGame .sort((g1, g2) =>
          orderBy === "Name"
            ? g1.name.localeCompare(g2.name)
            : orderBy === "Popularity"
            ? g2.added - g1.added
            : g2.rating - g1.rating
        )

  const  handlGenre =(gType: string)=> {
    setGenre(gType);
    setOrderBy('Popularity')
  }
  const handleOrderBy = (orderType:string)=>{
    setOrderBy(orderType)
  }
  const handlePlatform = (platformType:string)=>{
    setPlatform(platformType)
  }

  return (
    <>
      <HeaderWraper>
        <Genres handleGenre={handlGenre} />
      </HeaderWraper>
      <SimpleGrid
        columns={lgscreen ? 2 : 1}
        templateColumns={lgscreen ? "220px 1fr" : "1fr"}
        px={"15px"}
      >
       
        {lgscreen ? <Genres handleGenre={handlGenre} /> : <></>}
        <SimpleGrid templateRows={"auto auto"} ml={0} alignContent={"start"}>
          <Box>
            <Heading fontSize={"5xl"} textAlign={lgscreen ? "left" : "center"}>
              {genre || "All"} Games
            </Heading>

            <GameListControl
              handleOrderBy={handleOrderBy}
              handlePlatform={handlePlatform}
              orderBy={orderBy}
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
