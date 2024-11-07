import { useParams } from "react-router-dom"
import useGame from "../hook/useGame"
import { Heading, Text } from "@chakra-ui/react"

const GameDetailPage = () => {

   const {slug} = useParams()
   const game = useGame(slug)
  
   
   
  return (
    <>
      <Heading>{game.data?.name}</Heading>
      <Text>{game.data?.description_raw}</Text>
    </>
  );
}

export default GameDetailPage