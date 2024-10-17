import {
  Box,
  Card,
  CardBody,
  Grid,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Spinner,
  Stack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import GameCard from "./game-card";
import { Game } from "../services/game-service";
import useGame from "../hook/use-Game";
import { small } from "framer-motion/m";
import GameCardSkeleton from "./game-card-skeleton";
interface Props {
  games: Game[];
}


function GameGrid({ games }: Props) {
  const [lgscreen] = useMediaQuery("(min-width: 978px)");
   const { isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  // if (isLoading) return <Spinner size="xl" color="green.300" />;

  return (
    <Grid
      justifyContent={"start"}
      justifyItems={"center"}
      templateColumns={
        lgscreen ? "repeat(auto-fit, minmax(300px, auto))" : "1fr"
      }
      gridGap={"0 24px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
}

export default GameGrid;
