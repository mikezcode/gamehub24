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
}


const orderTypes =["Popularity","Name","Average rating"];
//

export interface GameListControlHandle {
  resetOrder: () => void;
}

const GameListControl = 
  ({ handleOrderBy}:Props) => {
    const { isOpen: isOrderOpen, onToggle: onOrderToggle } = useDisclosure();

    const [selectOrderOption, setSelectOrderOption] = useState("Popularity");

  

    const handleOrderSelect = (option: string) => {
      setSelectOrderOption(option);
     
      onOrderToggle();    };

  

    return (
    
        <Box width={"max-content"} alignSelf={"start"}>
          <Button
            onClick={() => {
              onOrderToggle();
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
     
    );
  }


export default GameListControl;
