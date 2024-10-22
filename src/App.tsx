import "./App.css";
import HeaderWraper, { InputHandle } from "./components/headerWraper";

import { Box, Heading, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import GameListControl, {
  GameListControlHandle,
} from "./components/game-list-control";
import useGame, { Game, Platform } from "./hook/use-Game";

import GameGrid from "./components/game-grid";
import Genres from "./components/genres";

import { useRef, useState } from "react";

import { Genre } from "./hook/use-genre";
import { PlatformSelector } from "./components/platform-selector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [orderBy, setOrderBy] = useState("Popularity");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
  const gameListRef = useRef<GameListControlHandle>(null);
  const headerWraperRef = useRef<InputHandle>(null);

  // let filteredGame = (
  //   genre || searchInput || platform
  //     ? data.filter((game) => {
  //         return (
  //           (genre === "" ||
  //             game.genres.filter((g) => g.name === genre).length !== 0) &&
  //           (searchInput === "" ||
  //             game.name.toLowerCase().includes(searchInput)) &&
  //           (platform === "" ||
  //             game.parent_platforms.filter((_platform) =>
  //               platform.toLowerCase().includes(_platform.platform.slug)
  //             ).length !== 0)
  //         );
  //       })
  //     : data
  // ).sort((g1, g2) =>
  //   orderBy === "Name"
  //     ? g1.name.localeCompare(g2.name)
  //     : orderBy === "Popularity"
  //     ? g2.added - g1.added
  //     : g2.rating - g1.rating
  // );

  const handlGenre = (gType: Genre | null) => {
    setSelectedGenre(gType);
    setOrderBy("Popularity");
    headerWraperRef.current?.resetInput();
    setSearchInput("");
    gameListRef.current?.resetOrder();
    gameListRef.current?.resetPlatform();
  };

  return (
    <>
      <HeaderWraper
        handleSearch={(input) => setSearchInput(input.toLowerCase().trim())}
        // sInput={searchInput}
        ref={headerWraperRef}
      >
        <Genres handleSelectedGenre={handlGenre} />
      </HeaderWraper>
      <SimpleGrid
        columns={lgscreen ? 2 : 1}
        templateColumns={lgscreen ? "220px 1fr" : "1fr"}
        px={"15px"}
      >
        {lgscreen ? <Genres handleSelectedGenre={handlGenre} /> : <></>}
        <SimpleGrid templateRows={"auto auto"} ml={0} alignContent={"start"}>
          <Box>
            <Heading fontSize={"5xl"} textAlign={lgscreen ? "left" : "center"}>
              {selectedGenre?.name ?? "All"} Games
            </Heading>

            <GameListControl
              handleOrderBy={(orderType: string) => setOrderBy(orderType)}
              handlePlatform={(platformType: string) =>
                setSelectedPlatform(null)
              }
              // orderBy={orderBy}
              // platform={platform}
              ref={gameListRef}
            />
            <PlatformSelector selectedPlatform ={selectedPlatform} onSelectPlatform={setSelectedPlatform} />
          </Box>
          {
            <GameGrid
              // filteredGameData={filteredGame}
              // handleGameData={(data) => setData(data)}
              // selectedGenre={genre}
              selectedGenre={selectedGenre}
              selectedPlatform = {selectedPlatform}
            />
          }
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default App;
