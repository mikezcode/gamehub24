import { Badge } from '@chakra-ui/react';
 interface Props{
  score:number | undefined
 }
const MetacriticBadge = ({score}:Props) => {
  return (
    <Badge
     mt={1}
      py={0.5}
      px={3}
      rounded={"md"}
      color={"green.300"}
      fontSize={"16px"}
      fontWeight={"700"}
    >
      {score}
    </Badge>
  );
}

export default MetacriticBadge