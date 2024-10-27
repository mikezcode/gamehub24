import "./App.css";
import NavBar from "./components/nav-bar";
import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import GameGrid from "./components/game-grid";
import Genres from "./components/genres";
import { useState } from "react";
import { Genre } from "./hook/use-genre";
import { PlatformSelector } from "./components/platform-selector";
import { SortSelector } from "./components/sort-selector";
import { Platform } from "./hook/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      gridTemplate={{
        base: `"nav" "main" /1fr`,
        lg: ` "nav nav" 
             "side main" / 200px 1fr`,
      }}
      // templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      justifyContent={"center"}
      m={3}
   
    >
      <GridItem gridArea={"nav"}>
        <NavBar
          onGameSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText })
          }
          handleSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
      <GridItem gridArea={"side"}>
        <Show above="lg">
          <Genres
            handleSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </Show>
      </GridItem>
      <GridItem gridArea={"main"} m={3}>
        <Box>
          <Heading
            fontSize={"5xl"}
            textAlign={{base:'center',lg:'left'}}
            // maxW={{ base: "449px", lg: "100%" }}
            // marginInline={{ base: "auto", lg: "0" }}
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
      </GridItem>
    </Grid>
  );
}

export default App;
