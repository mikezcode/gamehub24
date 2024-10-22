import "./App.css";
import HeaderWraper, { InputHandle } from "./components/headerWraper";

import { Box, Flex, Heading, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import GameListControl, {
  GameListControlHandle,
} from "./components/game-list-control";
import useGame, { Game, Platform } from "./hook/use-Game";

import GameGrid from "./components/game-grid";
import Genres from "./components/genres";

import { useRef, useState } from "react";

import { Genre } from "./hook/use-genre";
import { PlatformSelector } from "./components/platform-selector";
 
export interface GameQuery{
  genre: Genre | null,
  platform:Platform | null
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  const [searchInput, setSearchInput] = useState("");
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
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

 

  return (
    <>
      <HeaderWraper
        handleSearch={(input) => setSearchInput(input.toLowerCase().trim())}
        // sInput={searchInput}
        ref={headerWraperRef}
      >
        <Genres
          handleSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </HeaderWraper>
      <SimpleGrid
        columns={lgscreen ? 2 : 1}
        templateColumns={lgscreen ? "220px 1fr" : "1fr"}
        px={"15px"}
      >
        {lgscreen ? (
          <Genres
            handleSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          />
        ) : (
          <></>
        )}
        <SimpleGrid templateRows={"auto auto"} ml={0} alignContent={"start"}>
          <Box>
            <Heading fontSize={"5xl"} textAlign={lgscreen ? "left" : "center"}>
              {`${gameQuery.genre?.name || ""}  ${
                gameQuery.platform?.name || ""
              }`}{" "}
              Games
            </Heading>

            <Flex
              my={5}
              flexWrap={"wrap"}
              gap={2}
              justify={lgscreen ? "start" : "center"}
            >
              <GameListControl
                handleOrderBy={(orderType: string) => console.log(orderType)}
              />
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Flex>
          </Box>
          {
            <GameGrid gameQuery={gameQuery}
            />
          }
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default App;
