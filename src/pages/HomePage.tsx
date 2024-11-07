import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import DynamicHeading from "../components/dynamicHeading";
import GameGrid from "../components/gameGrid";
import Genres from "../components/genres";
import { PlatformSelector } from "../components/platformSelector";
import { SortSelector } from "../components/sortSelector";

function HomePage() {
  return (
    <Grid
      gridTemplate={{
        base: `"main" /1fr`,
        lg: `"side main" / 200px 1fr`,
      }}
      justifyContent={"center"}
      m={3}
    
 
    >
      {/* <GridItem gridArea={"nav"}>
        <NavBar />
      </GridItem> */}
      <GridItem gridArea={"side"}>
        <Show above="lg">
          <Genres />
        </Show>
      </GridItem>
      <GridItem gridArea={"main"} m={3}>
        <Box>
          <DynamicHeading />

          <Flex
            m={5}
            flexWrap={"wrap"}
            gap={2}
            justify={{ base: "center", lg: "start" }}
          >
            <SortSelector />
            <PlatformSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
