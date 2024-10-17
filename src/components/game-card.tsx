import {
  Card,
  Heading,
  Image,
  CardBody,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { Game } from "../services/game-service";
import PlatformIcons from "./platformIcons";
import { AddIcon } from "@chakra-ui/icons";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
    
  // const color = useColorModeValue('whiteAlpha300','blackAlpha300')
  // const bg = useColorModeValue("#F2F2F2", "#2C313D");


  return (
    <Card
    className="video-card"
      maxW="449px"
      w={"100%"}
      // minW={'230px'}
      height={"fit-content"}
      m={"10px"}
      // alignSelf={"start"}
      
      // _hover={{ transform: "scale(1.09)", transition: "0.8s ease all" }}
     
      display={"flex"}
      flexDirection={"column"}
      // backgroundColor={bg}
      boxShadow={'xl'}
      
    >
      <Image
        h={"15rem"}
        objectFit={"cover"}
        objectPosition={"top"}
        src={game.background_image}
        alt=""
        borderTopRadius="lg"
      />
      <CardBody flexGrow={1}>
        <HStack justify={"space-between"}>
          <PlatformIcons platforms={game.platforms} />
          <Badge
            py={0.5}
            px={2}
            rounded={"md"}
            color={"#6DC849"}
            border={"0.75px solid #6DC849"}
            fontSize={"14px"}
            fontWeight={"700"}
          >
            {game.suggestions_count}
          </Badge>
        </HStack>
        <Heading fontSize={"30px"} lineHeight={"35px"} fontWeight={700} mt={3}>
          {game.name} 👍
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
