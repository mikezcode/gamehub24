import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshoot from "../hook/useScreenshoot";

interface Props {
  id?: number;
}

const GameScreenshoots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenshoot(id);
  if (isLoading) return null;
  if (error) throw error;

  const screenshots = data?.results;
  if (!screenshots) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} mt={2}>
      {screenshots.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshoots;
