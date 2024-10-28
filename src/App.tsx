import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/gameGrid";
import Genres from "./components/genres";
import NavBar from "./components/navBar";
import { PlatformSelector } from "./components/platformSelector";
import { SortSelector } from "./components/sortSelector";
import useGenre from "./hook/useGenre";
import usePlatform from "./hook/usePlatform";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  const selectedGenre = useGenre(gameQuery.genreId)


 const selected_platform = usePlatform(gameQuery.platformId);
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
          handleSelectedGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre })
          }
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>
      <GridItem gridArea={"side"}>
        <Show above="lg">
          <Genres
            handleSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre })
            }
            selectedGenreId={gameQuery.genreId}
          />
        </Show>
      </GridItem>
      <GridItem gridArea={"main"} m={3}>
        <Box>
          <Heading
            fontSize={"5xl"}
            textAlign={{ base: "center", lg: "left" }}
            // maxW={{ base: "449px", lg: "100%" }}
            // marginInline={{ base: "auto", lg: "0" }}
          >
            {`${selectedGenre?.name ?? ""}  ${selected_platform?.name ?? ""} `}
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
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform })
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
