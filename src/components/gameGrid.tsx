import { Grid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGame from "../hook/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useGame(gameQuery);
  const fetchedGameSofar =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={fetchedGameSofar}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner mt={"24px"} color="green.300" />}
    >
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

        {data?.pages.map((page, index) => (
          // each page containing several game cards will iterates next to each other
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default GameGrid;
