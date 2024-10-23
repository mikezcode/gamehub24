import { Grid } from "@chakra-ui/react";
import GameCard from "./game-card";
import useGame from "../hook/use-Game";
import GameCardSkeleton from "./game-card-skeleton";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery
}


const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
 
  return (
    <Grid
      justifyItems={"center"}
      templateColumns={
       { base : "1fr", lg : "repeat(auto-fit, minmax(300px, auto))",}
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
