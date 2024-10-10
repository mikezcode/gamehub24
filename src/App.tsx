import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, List, ListItem, Stack, Text, useColorMode } from "@chakra-ui/react";
import "./App.css";

import HeaderWraper from "./components/headerWraper";
import Genres from "./components/genres";
import useGenreService from "./services/genre-service";
import useGameService from "./services/game-service";
function App() {

  const games = useGameService();
  // console.log(games);
  
  
  
  return (
    <>
      <HeaderWraper />

    </>
  );
}

export default App;
