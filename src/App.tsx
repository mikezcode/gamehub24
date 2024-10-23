import "./App.css";
import SearchBar from "./components/search-bar";
import { Box, Flex, Heading, Show, SimpleGrid } from "@chakra-ui/react";
import { Platform } from "./hook/use-Game";
import GameGrid from "./components/game-grid";
import Genres from "./components/genres";
import { useState } from "react";
import { Genre } from "./hook/use-genre";
import { PlatformSelector } from "./components/platform-selector";
import { SortSelector } from "./components/sort-selector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <SearchBar
        onGameSearch={(searchText) =>
          setGameQuery({ ...gameQuery, searchText })
        }
      >
        <Genres
          handleSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </SearchBar>
      <SimpleGrid
        columns={{ lg: 2, base: 1 }}
        templateColumns={{ base: "1fr", lg: "220px 1fr" }}
        px={"15px"}
      >
        <Show above="lg">
          <Genres
            handleSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </Show>

        <SimpleGrid templateRows={"auto auto"} ml={0} alignContent={"start"}>
          <Box>
            <Heading
              fontSize={"5xl"}
              textAlign={{ base: "center", lg: "left" }}
            >
              {`${gameQuery.genre?.name ?? ""}  ${
                gameQuery.platform?.name ?? ""
              } `}
              Games
            </Heading>

            <Flex
              my={5}
              flexWrap={"wrap"}
              gap={2}
              justify={{ base: "center", lg: "start" }}
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
          <GameGrid gameQuery={gameQuery} />
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default App;
