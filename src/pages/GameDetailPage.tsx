
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hook/useGame";
import GameAttributes from "../components/GameAttributes";
import platformData from "../data/platformData";
import { Badge, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import MetacriticBadge from "../components/MetacriticBadge";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner/>;
  if (error) throw error;


  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw!}</ExpandableText>
      <SimpleGrid columns={2} mt={5} gap={10} as={'dl'}>
        <GameAttributes term="Platforms">
          {game?.parent_platforms.map(({ platform },index) => (
            <Text key={index}>{platform.name}</Text>
          ))}
        </GameAttributes>
        <GameAttributes term="MetaScore">
         <MetacriticBadge score ={game?.metacritic}/>
        </GameAttributes>
        <GameAttributes term="Genres">
          {game?.genres.map((genre) => (
            <Text key={game.id}>{genre.name}</Text>
          ))}
        </GameAttributes>
        <GameAttributes term="Publishers">
          {game?.publishers.map((publisher) => (
            <Text key={game.id}>{publisher.name}</Text>
          ))}
        </GameAttributes>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
