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
import { forwardRef, useImperativeHandle, useState } from "react";

interface Props {
  handleOrderBy: (option: string) => void;
  handlePlatform: (option: string) => void;
  // orderBy: string;
  // platform: string;
}

const platformTypes = [
  "PC",
  "PlayStation",
  "Xbox",
  "Ios",
  "Android",
  "MacOS",
  "Linux",
  "Nintendo Switch",
];

const orderTypes =["Popularity","Name","Average rating"];
//

export interface GameListControlHandle {
  resetOrder: () => void;
  resetPlatform: () => void;
}

const GameListControl = forwardRef<GameListControlHandle, Readonly<Props>>(
  ({ handleOrderBy, handlePlatform }, ref) => {
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
    // useEffect(() => {
    //   setSelectOrderOption(orderBy);
    //   setSelectPlatformOption(platform);
    // });

    const handleOrderSelect = (option: string) => {
      setSelectOrderOption(option);
      handleOrderBy(option);
      onOrderToggle();
      if (isPlatformOpen) onPlatformToggle();
    };

    //  imperartive handle
    useImperativeHandle(ref, () => ({
      resetOrder: () => {
        setSelectOrderOption("Popularity");
        if (isOrderOpen) onOrderToggle();
      },
      resetPlatform: () => {
        setSelectPlatformOption("");
        if (isPlatformOpen) onPlatformToggle();
      },
    }));

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
                {orderTypes.map((orderType) => (
                  <ListItem
                  key={orderType}
                    _hover={{ background: "#f3f3f3" }}
                    p={"5px 10px"}
                    rounded={"lg"}
                    cursor={"pointer"}
                    onClick={() => handleOrderSelect(orderType)}
                  >
                    {orderType}
                    {selectOrderOption === orderType && (
                      <CheckIcon color={"green"} />
                    )}
                  </ListItem>
                ))}             
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

                {platformTypes.map((platform) => (
                  <ListItem
                    key={platform}
                    _hover={{ background: "#f3f3f3" }}
                    p={"5px 10px"}
                    rounded={"lg"}
                    cursor={"pointer"}
                    onClick={() => handlePlatformSelect(platform)}
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
);

export default GameListControl;
