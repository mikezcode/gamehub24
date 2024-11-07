import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import GameDefinitionItem from "./GameDefinitionItem";
import MetacriticBadge from "./MetacriticBadge";

interface Props {
  game?:Game
}

const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} mt={5} gap={10} as={"dl"}>
      <GameDefinitionItem term="Platforms">
        {game?.parent_platforms.map(({ platform }, index) => (
          <Text key={index}>{platform.name}</Text>
        ))}
      </GameDefinitionItem>
      <GameDefinitionItem term="MetaScore">
        <MetacriticBadge score={game?.metacritic} />
      </GameDefinitionItem>
      <GameDefinitionItem term="Genres">
        {game?.genres.map((genre,index) => (
          <Text key={index}>{genre.name}</Text>
        ))}
      </GameDefinitionItem>
      <GameDefinitionItem term="Publishers">
        {game?.publishers.map((publisher,index) => (
          <Text key={index}>{publisher.name}</Text>
        ))}
      </GameDefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
