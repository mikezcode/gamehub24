
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hook/useGame";
import GameAttributes from "../components/GameAttributes";
import platformData from "../data/platformData";
import { Badge, Box, GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import MetacriticBadge from "../components/MetacriticBadge";
import useGameTrailer from "../hook/useGameTrailer";
import GameTrailer from "../components/GameTrailer";
import GameScreenshoots from "../components/GameScreenshoots";
import { base } from "framer-motion/client";



const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
 
  
  if (isLoading) return <Spinner/>;
  if (error) throw error;


  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw!}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer id={game?.id} />
        <GameScreenshoots id={game?.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
