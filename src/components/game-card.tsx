import { Stack, Card, Heading, Image, CardBody, HStack, Badge } from '@chakra-ui/react'
import { title } from 'framer-motion/client'
import React from 'react'
import { Game, Platform } from '../services/game-service'
import PlatformIcons from './platformIcons'
interface Props{
  game:Game
}
function GameCard({game}:Props) {

  return (
    <Card maxW="480px" m={"10px"}>
      <Image w={"100%"} src={game.background_image} alt="" borderTopRadius="lg" />
      <CardBody>
        <HStack>
          <PlatformIcons platforms={game.platforms} />
          <Badge> </Badge>
        </HStack>
        <Heading fontSize={"24px"} lineHeight={"28px"} fontWeight={700} mt={3} >
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard