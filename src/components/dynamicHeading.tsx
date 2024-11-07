import { Heading } from '@chakra-ui/react';
import useGenre from '../hook/useGenre';
import usePlatform from '../hook/usePlatform';
import useGameQueryStore from '../store';

const DynamicHeading = () => {
  const genreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedGenre = useGenre(genreId);
  const selected_platform = usePlatform(platformId);

  return (
    <Heading mx={5} fontSize={"5xl"} textAlign={{ base: "center", lg: "left" }}>
      {`${selectedGenre?.name ?? ""}  ${selected_platform?.name ?? ""}  Games`}
    </Heading>
  );
}

export default DynamicHeading