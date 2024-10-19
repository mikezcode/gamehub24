import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useImperativeHandle, useState } from "react";
import { platformTypes } from "./platformIcons";
import { wrap } from "framer-motion";
import React from "react";

interface Props {
  handleOrderBy: (option: string) => void;
  handlePlatform: (option: string) => void;
  orderBy: string;
  platform: string;
}

const platformType = [
  "PC",
  "PlayStation",
  "Xbox",
  "Ios",
  "Android",
  "MacOS",
  "Linux",
  "Nintendo Switch",
];

//

function GameListControl({
  handleOrderBy,
  handlePlatform,
  orderBy,
  platform,
}: Readonly<Props>) {
  const { isOpen: isOrderOpen, onToggle: onOrderToggle } = useDisclosure();
  const { isOpen: isPlatformOpen, onToggle: onPlatformToggle } =
    useDisclosure();

  const [lgscreen] = useMediaQuery("(min-width: 978px)");

  const [selectOrderOption, setSelectOrderOption] = useState("Popularity");
  const [selectPlatformOption, setSelectPlatformOption] = useState("");

  const handlePlatformSelect = (option: string) => {
    setSelectPlatformOption(option);
    handlePlatform(option);
    onPlatformToggle();
    if (isOrderOpen) onOrderToggle();
  };
  useEffect(() => {    
    setSelectOrderOption(orderBy);
    setSelectPlatformOption(platform);
  });


  


  const handleOrderSelect = (option: string) => {
    setSelectOrderOption(option);
    handleOrderBy(option);
    onOrderToggle();
    if (isPlatformOpen) onPlatformToggle();
  };
  return (
    <Flex
      my={5}
      mx={"auto"}
      flexWrap={"wrap"}
      gap={2}
      justify={lgscreen ? "start" : "center"}
    >
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
        <Box position={"absolute"} zIndex={10}>
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
        <Box position={"absolute"} zIndex={10}>
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
                onClick={() => handlePlatformSelect("")}
              >
                clear
              </ListItem>
              {/* {platformTypes.map((platform) => ( */}
              {platformType.map((platform) => (
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
      </Box>
    </Flex>
  );
}

export default GameListControl;
