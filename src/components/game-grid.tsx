import { Box, Button, Grid, Text } from "@chakra-ui/react";
import GameCard from "./game-card";
import useGame from "../hook/use-Game";
import GameCardSkeleton from "./game-card-skeleton";
import { GameQuery } from "../App";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error,fetchNextPage ,isFetchingNextPage,hasNextPage} = useGame(gameQuery);  
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
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

        {data?.pages.map((page,index) => 
         // each page containing several game cards will iterates next to each other
          <React.Fragment key={index}>
            { page.results.map((game) => <GameCard key={game.id} game={game} />)}
          </React.Fragment>

        )}
      </Grid>
     
     { hasNextPage && 
     <Box maxW={"449px"} w={"100%"} mt={'24px'} justifySelf={{base:'center',lg:'start'}}>
        <Button onClick={() => fetchNextPage()}>{isFetchingNextPage? "Loading ... ": "Load More"}</Button>
      </Box>}
    </>
  );
};

export default GameGrid;
