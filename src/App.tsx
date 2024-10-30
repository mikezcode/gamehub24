import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import DynamicHeading from "./components/dynamicHeading";
import GameGrid from "./components/gameGrid";
import Genres from "./components/genres";
import NavBar from "./components/navBar";
import { PlatformSelector } from "./components/platformSelector";
import { SortSelector } from "./components/sortSelector";
function App() { 
  return (
    <Grid
      gridTemplate={{
        base: `"nav" "main" /1fr`,
        lg: ` "nav nav" 
             "side main" / 200px 1fr`,
      }}
      
      justifyContent={"center"}
      m={3}
    >
      <GridItem gridArea={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem gridArea={"side"}>
        <Show above="lg">
          <Genres />
        </Show>
      </GridItem>
      <GridItem gridArea={"main"} m={3}>
        <Box>
         <DynamicHeading/>

          <Flex
            my={5}
            flexWrap={"wrap"}
            gap={2}
            justify={{ base: "center", lg: "start" }}
          >
            <SortSelector />
            <PlatformSelector />
          </Flex>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
