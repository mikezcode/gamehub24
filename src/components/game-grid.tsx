import { Grid, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";

import GameCard from "./game-card";
import useGame, { Game } from "../hook/use-Game";
import GameCardSkeleton from "./game-card-skeleton";
interface Props {
  handleGameData: (games: Game[]) => void;
  filteredGameData: Game[];
}

function GameGrid({ handleGameData, filteredGameData }: Props) {
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
  const { data: games, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    handleGameData(games);
  });

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
      {filteredGameData.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
}

export default GameGrid;
