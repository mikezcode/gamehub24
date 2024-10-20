import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card
      maxW="449px"
      w={"100%"}
      boxShadow={"xl"}
      borderRadius="lg"
      overflow={"hidden"}
    >
      <Skeleton height={240} />
      <CardBody>
        <SkeletonText h={170}/>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton