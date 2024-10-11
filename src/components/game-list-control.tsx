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
import { useState } from "react";
import { platformTypes } from "./platformIcons";

interface Props {
  handleOrderBy: (option: string) => void;
  handlePlatform: (option: string) => void;
}

function GameListControl({ handleOrderBy, handlePlatform }: Props) {
  const { isOpen: isOrderOpen, onToggle: onOrderToggle } = useDisclosure();
  const { isOpen: isPlatformOpen, onToggle: onPlatformToggle } =
    useDisclosure();

  const [selectOrderOption, setSelectOrderOption] = useState("Popularity");
  const [selectPlatformOption, setSelectPlatformOption] = useState("");

  const handlePlatformSelect = (option: string) => {
    setSelectPlatformOption(option);
    handlePlatform(option);
    onPlatformToggle();
    if (isOrderOpen) onOrderToggle();
  };

  const handleOrderSelect = (option: string) => {
    setSelectOrderOption(option);
    handleOrderBy(option);
    onOrderToggle();
    if (isPlatformOpen) onPlatformToggle();
  };
  return (
    <HStack>
      <Box width={"max-content"} alignSelf={"start"}>
        <Button
          onClick={() => {
            onOrderToggle();
            if (isPlatformOpen) onPlatformToggle();
          }}
        >
          <HStack>
            <Text>Order By: </Text>
            <Text>{selectOrderOption}</Text>
            <ChevronDownIcon />
          </HStack>
        </Button>
        <Collapse in={isOrderOpen} animateOpacity>
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
              onClick={(e) => handleOrderSelect("Popularity")}
            >
              Populatrity{" "}
              {selectOrderOption === "Popularity" && (
                <CheckIcon color={"green"} />
              )}
            </ListItem>
            <ListItem
              _hover={{ background: "#f3f3f3" }}
              p={"5px 10px"}
              rounded={"lg"}
              cursor={"pointer"}
              onClick={(e) => handleOrderSelect("Name")}
            >
              Name{" "}
              {selectOrderOption === "Name" && <CheckIcon color={"green"} />}
            </ListItem>
            <ListItem
              _hover={{ background: "#f3f3f3" }}
              p={"5px 10px"}
              rounded={"lg"}
              cursor={"pointer"}
              onClick={(e) => handleOrderSelect("Average rating")}
            >
              Average rating{" "}
              {selectOrderOption === "Average rating" && (
                <CheckIcon color={"green"} />
              )}
            </ListItem>
          </List>
        </Collapse>
      </Box>
      <Box width={"max-content"} alignSelf={"start"}>
        <Button
          onClick={() => {
            onPlatformToggle();
            if (isOrderOpen) onOrderToggle();
          }}
        >
          <HStack>
            {selectPlatformOption ? (
              <Text>{selectPlatformOption}</Text>
            ) : (
              <Text>Platforms</Text>
            )}
            <ChevronDownIcon />
          </HStack>
        </Button>
        <Collapse in={isPlatformOpen} animateOpacity>
          <List
            bg={"white"}
            width={"100%"}
            color={"blackAlpha.800"}
            p={"15px"}
            rounded={"sm"}
          >
            <ListItem
              color={"red"}
              p={"5px 10px"}
              _hover={{ textDecor: "underline", cursor: "pointer" }}
              onClick={() => setSelectPlatformOption("")}
            >
              clear
            </ListItem>
            {platformTypes.map((platform) => (
              <ListItem
                key={platform}
                _hover={{ background: "#f3f3f3" }}
                p={"5px 10px"}
                rounded={"lg"}
                cursor={"pointer"}
                onClick={(e) => handlePlatformSelect(platform)}
              >
                {platform}
                {selectPlatformOption === platform && (
                  <CheckIcon color={"green"} />
                )}
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Box>
    </HStack>
  );
}

export default GameListControl;
