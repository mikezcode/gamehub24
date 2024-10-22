import { Grid, useMediaQuery } from "@chakra-ui/react";
import GameCard from "./game-card";
import useGame, { Platform } from "../hook/use-Game";
import GameCardSkeleton from "./game-card-skeleton";
import { Genre } from "../hook/use-genre";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform:Platform | null ;
}

const GameGrid = ({ selectedGenre,selectedPlatform }: Props) => {
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
  const { data, isLoading } = useGame(selectedGenre,selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
 
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
