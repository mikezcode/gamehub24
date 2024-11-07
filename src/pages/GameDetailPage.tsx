
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hook/useGame";
import GameAttributes from "../components/GameAttributes";
import platformData from "../data/platformData";
import { Badge, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import MetacriticBadge from "../components/MetacriticBadge";
import useGameTrailer from "../hook/useGameTrailer";
import GameTrailer from "../components/GameTrailer";



const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  
  if (isLoading) return <Spinner/>;
  if (error) throw error;


  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw!}</ExpandableText>
      <GameAttributes game={game}/>
      <GameTrailer id= {game?.id}/>
    </>
  );
};

export default GameDetailPage;
