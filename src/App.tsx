import "./App.css";
import SearchBar, { InputHandle } from "./components/search-bar";

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";

import useGame, { Game, Platform } from "./hook/use-Game";

import GameGrid from "./components/game-grid";
import Genres from "./components/genres";

import { useRef, useState } from "react";

import { Genre } from "./hook/use-genre";
import { PlatformSelector } from "./components/platform-selector";
import { SortSelector } from "./components/sort-selector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText:string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [searchInput, setSearchInput] = useState("");
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
  const headerWraperRef = useRef<InputHandle>(null);

  return (
    <>
      <SearchBar
        onGameSearch={(searchText) => setGameQuery({...gameQuery,searchText})}
        // sInput={searchInput}
        searchText={gameQuery.searchText}
      >
        <Genres
          handleSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </SearchBar>
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
              } `}
              Games
            </Heading>

            <Flex
              my={5}
              flexWrap={"wrap"}
              gap={2}
              justify={lgscreen ? "start" : "center"}
            >
              <SortSelector
                onSelectedSort={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                selectedSort={gameQuery.sortOrder}
              />
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Flex>
          </Box>
          {<GameGrid gameQuery={gameQuery} />}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default App;
