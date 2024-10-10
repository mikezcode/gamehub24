import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Grid,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import "./App.css";

import HeaderWraper from "./components/headerWraper";
import Genres from "./components/genres";
import useGenreService from "./services/genre-service";
import useGameService from "./services/game-service";
import PlatformIcons from "./components/platformIcons";
import GameCard from "./components/game-card";
import GameGrid from "./components/game-grid";
function App() {
 
  const games = useGameService();
  console.log(games);

  return (
    <>
      <HeaderWraper />
      <GameGrid games={games}/>
     
    </>
  );
}

export default App;
