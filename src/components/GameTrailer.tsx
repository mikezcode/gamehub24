import { Box } from "@chakra-ui/react";
import useGameTrailer from "../hook/useGameTrailer";
interface Props {
  id?: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data,error,isLoading } = useGameTrailer(id);
  if(isLoading)  return null;
  if(error) throw error;

  const trailer= data?.results[0];
  if (!trailer) return null;

  return (
    <Box mt={5}>
      <video src={trailer.data[480]} 
      poster={trailer.preview}      
      controls />
    </Box>
  );
};

export default GameTrailer;
