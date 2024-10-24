import {
  Card,
  Heading,
  Image,
  CardBody,
  HStack,
  Badge,
} from "@chakra-ui/react";

import PlatformIcons from "./platformIcons";
import { AddIcon } from "@chakra-ui/icons";
import cropImage from "../services/image-url";
import { Game } from "../hook/use-Game";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  
  return (
    <Card
      maxW={"449px"}
      w={"100%"}
      height={"fit-content"}
      // m={"10px"}
      display={"flex"}
      flexDirection={"column"}
      boxShadow={"xl"}
      rounded="lg"
      overflow={"hidden"}
      _hover={{ cursor: "pointer" }}
    >
      <Image
        h={"15rem"}
        objectFit={"cover"}
        objectPosition={"top"}
        src={cropImage(game.background_image)}
        alt=""
      />
      <CardBody flexGrow={1}>
        <HStack justify={"space-between"}>
          <PlatformIcons platforms={game.parent_platforms} />
          <Badge
            py={0.5}
            px={2}
            rounded={"md"}
            color={"green.300"}
            // border={"0.75px solid #6DC849"}
            fontSize={"14px"}
            fontWeight={"700"}
          >
            {game.suggestions_count}
          </Badge>
        </HStack>
        <Heading fontSize={"30px"} lineHeight={"35px"} fontWeight={700} mt={3}>
          {game.name} { game.rating_top ===4? "🎯": (game.rating_top===5 ? "👍": "")}
        </Heading>
        <Badge 
          py={1}
          px={2}
          fontWeight={500}
          fontSize={"md"}
          rounded={"md"}
          my={3}
        >
          <AddIcon boxSize={3} /> {game.added.toLocaleString()}
        </Badge>
      </CardBody>
    </Card>
  );
}

export default GameCard;
