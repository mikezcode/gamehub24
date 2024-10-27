import { Grid, Text } from "@chakra-ui/react";
import GameCard from "./game-card";
import useGame from "../hook/use-Game";
import GameCardSkeleton from "./game-card-skeleton";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery
}


const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading,error } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if(error) return <Text>{error.message}</Text>
  return (
    <Grid
      justifyItems={"center"}
      templateColumns={{
        base: "1fr",
        lg: "repeat(auto-fit, minmax(300px, auto))",
      }}
      gridGap={"24px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {/* {(!data.length && !isLoading) && (
        <Heading  size={'lg'}>
          Your search - {gameQuery.searchText} - did not match any
          games.
        </Heading>
      )} */}
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
};

export default GameGrid;
