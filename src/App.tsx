import "./App.css";
import HeaderWraper from "./components/headerWraper";

import { Box, Heading, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import GameListControl from "./components/game-list-control";
import useGame from "./hook/use-Game";

import GameGrid from "./components/game-grid";
import Genres from "./components/genres";
import { Game } from "./services/game-service";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState<Game[]>([]);

  const [genre, setGenre] = useState("");
  const [orderBy, setOrderBy] = useState("Popularity");
  const [platform, setPlatform] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  let filteredGame =
    genre || searchInput
      ? data.filter((game) => {
          return (
            (game.genres.filter((g) => g.name === genre || genre === "").length !== 0) &&
            (game.name.toLowerCase().includes(searchInput.toLowerCase().trim())) &&
            console.log(platform)
            
          );
        })
      : data;

 

  filteredGame.sort((g1, g2) =>
    orderBy === "Name"
      ? g1.name.localeCompare(g2.name)
      : orderBy === "Popularity"
      ? g2.added - g1.added
      : g2.rating - g1.rating
  );

  const handlGenre = (gType: string) => {
    setGenre(gType);
    setOrderBy("Popularity");
    setSearchInput("");
  };

  const handleOrderBy = (orderType: string) => {
    setOrderBy(orderType);
  };

  const handlePlatform = (platformType: string) => {
    setPlatform(platformType);
  };

  return (
    <>
      <HeaderWraper handleSearch={(input) => setSearchInput(input)}>
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
          </Box>
          {
            <GameGrid
              filteredGameData={filteredGame}
              handleGameData={(data) => setData(data)}
            />
          }
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default App;
