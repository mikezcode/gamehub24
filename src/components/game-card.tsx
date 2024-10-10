import {
  Stack,
  Card,
  Heading,
  Image,
  CardBody,
  HStack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Game, Platform } from "../services/game-service";
import PlatformIcons from "./platformIcons";
import { AddIcon } from "@chakra-ui/icons";
import { IoMdAdd } from "react-icons/io";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card
      maxW="480px"
      w={'23rem'}
      height={'fit-content'}
      m={"10px"}
      alignSelf={'start'}
      // _hover={{ transform: "scale(1.09)", transition: "0.8s ease all" }}
      boxSizing="border-box"
      display={"flex"}
      flexDirection={"column"}
    >
      <Image        
        h={"15rem"}
        objectFit={'cover'}
        objectPosition={'top'}
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
