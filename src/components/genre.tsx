import { 
  Text,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";

interface Props {
  url: string;
  title: string;
  handleGenre:(genre:string)=> void
}

function Genre({ url, title,handleGenre }: Props) {
  return (
    <Link  onClick={()=>handleGenre(title)}>
      <HStack align={"center"} mb={3}>
        <Image
          borderColor={"none"}
          borderRadius={"6px"}
          src={url}
          boxSize={"32px"}
          objectFit={'cover'}
          
        />
        <Text fontWeight="500" textDecoration={"none"}>
          {title}
        </Text>
      </HStack>
    </Link>
  );
}

export default Genre;
