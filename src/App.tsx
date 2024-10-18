import "./App.css";
import HeaderWraper from "./components/headerWraper";

import { Box, Heading, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import GameListControl from "./components/game-list-control";
import useGame from "./hook/use-Game";

import GameGrid from "./components/game-grid";
import Genres from "./components/genres";
import { Game } from "./services/game-service";
import { RefObject, useEffect, useState } from "react";
import { input } from "framer-motion/client";
function App() {
  const [data, setData] = useState<Game[]>([]);

  const [genre, setGenre] = useState("");
  const [orderBy, setOrderBy] = useState("Popularity");
  const [platform, setPlatform] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
  
  
  let filteredGame = (
    genre || searchInput || platform
      ? data.filter((game) => {
       
          return (
            (genre === "" ||
              game.genres.filter((g) => g.name === genre).length !== 0) &&
            (searchInput === "" ||
              game.name.toLowerCase().includes(searchInput)) &&
            (platform === "" ||
              game.parent_platforms.filter((_platform) => platform.toLowerCase().includes( _platform.platform.slug))
                .length !== 0)
          );
        })
      : data
  ).sort((g1, g2) =>
    orderBy === "Name"
      ? g1.name.localeCompare(g2.name)
      : orderBy === "Popularity"
      ? g2.added - g1.added
      : g2.rating - g1.rating
  );

  const handlGenre = (gType: string) => {
    setGenre(gType);
    setOrderBy("Popularity");
    setPlatform("");
    setSearchInput("");
  };

  return (
    <>
      <HeaderWraper
        handleSearch={(input) => setSearchInput(input.toLowerCase().trim())}
        sInput={searchInput}
      >
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
              handleOrderBy={(orderType: string) => setOrderBy(orderType)}
              handlePlatform={(platformType: string) =>
                setPlatform(platformType)
              }
              orderBy={orderBy}
              platform={platform}
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
