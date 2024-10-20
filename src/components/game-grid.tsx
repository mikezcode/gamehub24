import { Grid, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";

import GameCard from "./game-card";
import useGame, { Game } from "../hook/use-Game";
import GameCardSkeleton from "./game-card-skeleton";
import { Genre } from "../hook/use-genre";
interface Props {
  // handleGameData: (games: Game[]) => void;
  // filteredGameData: Game[];
  selectedGenre: Genre|null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
  const { data, isLoading } = useGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  // if (isLoading) return <Text> Loading ....</Text>


 
  
  return (
    <Grid
      justifyItems={"center"}
      templateColumns={
        lgscreen ? "repeat(auto-fit, minmax(300px, auto))" : "1fr"
      }
      gridGap={"24px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
};

export default GameGrid;
