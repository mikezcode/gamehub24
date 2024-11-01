import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalContent,
  ModalOverlay,
  Show,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const bg = useColorModeValue("#f1f1f1", "#3a3a3a");
  const [searchInput, setSearchInput] = useState("");
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFocused, setIsFocused] = useState(false);
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  console.log(isFocused + " on APP " + isOpen);

  const inputProps = {
    bg,
    color: "#898989",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    _hover: {
      background: "#F2F2F2",
      color: "#222",
      outline: "none",
    },
    _focus: {
      background: "#F2F2F2",
      color: "#222",
      outline: "none",
      outlineOffset: "0px",
      outlineColor: "#f2f2f2",
      border: "none",
      overflow: "hidden",
    },
    value: searchInput,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    },
    ref: inputRef,
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText(searchInput);
        setIsFocused(false);
        console.log(isFocused);
        onClose();
        inputRef.current?.blur();
      }}
    >
      <InputGroup
        bg={bg}
        borderRadius={"30px"}
        width={"100%"}
        flexGrow={1}
        outlineOffset={"0px"}
        boxShadow={"lg"}
      >
        <InputLeftElement>
          <SearchIcon color={"#181818"} />
        </InputLeftElement>
        <Input
          {...inputProps}
          onFocus={() => {
            if (isSmallScreen) onOpen();
            setIsFocused(true);
          }}
        />
        <InputRightElement>
          <CloseIcon
            color={"#181818"}
            cursor={"pointer"}
            onClick={() => {
              setSearchInput("");
            }}
            boxSize={3}
          />
        </InputRightElement>
      </InputGroup>

      <Show below="lg">
        <Modal isOpen={isFocused} onClose={onClose}>
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="80%"
            backdropBlur="2px"
          />
          <ModalContent
            maxW={"85vw"}
            ml={0}
            borderRadius={"30px"}
            overflow={"hidden"}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchText(searchInput);
                setIsFocused(false);
                onClose();
                inputRef.current?.blur();
              }}
            >
              <InputGroup
                w={"100%"}
                bg={bg}
                borderRadius={"30px"}
                width={"100%"}
                flexGrow={1}
                outlineOffset={"0px"}
                boxShadow={"lg"}
              >
                <InputLeftElement>
                  <SearchIcon color={"#181818"} />
                </InputLeftElement>
                <Input {...inputProps} autoFocus />
                <InputRightElement>
                  <CloseIcon
                    color={"#181818"}
                    cursor={"pointer"}
                    onClick={() => {
                      setSearchInput("");
                      onClose();
                    }}
                    boxSize={3}
                  />
                </InputRightElement>
              </InputGroup>
            </form>
          </ModalContent>
        </Modal>
      </Show>
    </form>
  );
};

export default SearchInput;
