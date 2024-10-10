import { Stack, Card, Heading, Image, CardBody, HStack, Badge } from '@chakra-ui/react'
import { title } from 'framer-motion/client'
import React from 'react'
import { Game, Platform } from '../services/game-service'
import PlatformIcons from './platformIcons'
import { AddIcon } from '@chakra-ui/icons'
interface Props{
  game:Game
}
function GameCard({game}:Props) {

  return (
    <Card maxW="480px" m={"5px"} bg={"#202020"}>
      <Image
        w={"100%"}
        src={game.background_image}
        alt=""
        borderTopRadius="lg"
      />
      <CardBody>
        <HStack justify={"space-between"}>
          <PlatformIcons platforms={game.platforms} />
          <Badge
            py={1}
            px={2}
            rounded={"md"}
            color={"#6DC849"}
            border={"0.75px solid #6DC849"}
            bgColor={"#202020"}
          >
            {" "}
            {game.suggestions_count}
          </Badge>
        </HStack>
        <Heading fontSize={"24px"} lineHeight={"28px"} fontWeight={700} mt={3}>
          {game.name}
        </Heading>
        <Badge py={1} px={2} fontWeight={400} fontSize={'md'} rounded={"md"} mt={3}>
          {" "}
          <AddIcon boxSize={3}  /> {game.added.toLocaleString()}
        </Badge>
      </CardBody>
    </Card>
  );
}

export default GameCard