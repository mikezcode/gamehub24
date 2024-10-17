import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card
      maxW="449px"
      w={"100%"}
      height={"fit-content"}
      m={"10px"}
      boxShadow={"xl"}
      borderRadius="lg"
      overflow={"hidden"}
    >
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText h={150}/>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton