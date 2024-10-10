import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, List, ListItem, Stack, Text, useColorMode } from "@chakra-ui/react";
import "./App.css";

import HeaderWraper from "./components/headerWraper";
import Genres from "./components/genres";
import useGenreService from "./services/genre-service";
import useGameService from "./services/game-service";
import PlatformIcons from "./components/platformIcons";
import GameCard from "./components/game-card";
function App() {

  const games = useGameService();
  console.log(games.map(g=>console.log(g.platforms)
  ));
  
  
  
  return (
    <>
      <HeaderWraper />

      <Stack align={"center"}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Stack>
    </>
  );
}

export default App;
