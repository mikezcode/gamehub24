import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  HStack,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {useState } from "react";


interface Props {
  handleOrderBy: (option: string) => void;
}
function GameListoOrderControl({ handleOrderBy }: Props) {
  const [selectOption, setSelectOption] = useState("Popularity");
  const { isOpen, onToggle } = useDisclosure();
  const handleSelect = (option: string) => {
    setSelectOption(option);
    handleOrderBy(option);
    onToggle();
  };
  return (
    <Box width={"max-content"}>
      <Button onClick={onToggle}>
        <HStack>
          <Text>Order By: </Text>
          <Text>{selectOption}</Text>
          <ChevronDownIcon />
        </HStack>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <List
          bg={"white"}
          width={"100%"}
          color={"blackAlpha.800"}
          p={"15px"}
          rounded={"sm"}
        >
          <ListItem
            _hover={{ background: "#f3f3f3" }}
            p={"5px 10px"}
            rounded={"lg"}
            cursor={"pointer"}
            onClick={(e) => handleSelect("Popularity")}
          >
            Populatrity{" "}
            {selectOption === "Popularity" && <CheckIcon color={"green"} />}
          </ListItem>
          <ListItem
            _hover={{ background: "#f3f3f3" }}
            p={"5px 10px"}
            rounded={"lg"}
            cursor={"pointer"}
            onClick={(e) => handleSelect("Name")}
          >
            Name {selectOption === "Name" && <CheckIcon color={"green"} />}
          </ListItem>
          <ListItem
            _hover={{ background: "#f3f3f3" }}
            p={"5px 10px"}
            rounded={"lg"}
            cursor={"pointer"}
            onClick={(e) => handleSelect("Average rating")}
          >
            Average rating{" "}
            {selectOption === "Average rating" && <CheckIcon color={"green"} />}
          </ListItem>
        </List>
      </Collapse>
    </Box>
  );
}

export default GameListoOrderControl;
