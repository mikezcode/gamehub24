import { Box, Grid, HStack, Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";
import GameCard from "./game-card";
import { Game } from "../services/game-service";
interface Props {
  games: Game[];
}
function GameGrid({ games }: Props) {

  const [lgscreen] = useMediaQuery("(min-width: 978px)");
  return (
    <Grid
      justifyContent={"start"}
      justifyItems={"center"}
      templateColumns={
        lgscreen ? "repeat(auto-fit, minmax(350px, auto))" : "1fr"
      }
      
      gridGap={"0 24px"}
    >
     
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
   
    </Grid>
  );
}

export default GameGrid;

