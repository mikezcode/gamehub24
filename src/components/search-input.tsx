import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input, InputRightElement, useColorModeValue } from '@chakra-ui/react';
import React, { useRef, useState } from 'react'


interface Props {
  onGameSearch: (searchText: string) => void;
}

 const SearchInput = ({onGameSearch}:Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const bg = useColorModeValue("#D1D2D5", "#3a3a3a");
  const [searchInput, setSearchInput] = useState("");

 

  return (
    <form onSubmit={e=>{
      e.preventDefault()
      onGameSearch(searchInput);
    }}>
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
          bg={bg}
          color={"#898989"}
          borderRadius={"30px"}
          border={"none"}
          outline={"none"}
          _hover={{
            background: "#F2F2F2",
            color: "#222",
            outline: "none",
          }}
          _focus={{
            background: "#F2F2F2",
            color: "#222",
            outline: "none",
            outlineOffset: "0px",
            outlineColor: "#f2f2f2",
            border: "none",
            overflow: "hidden",
          }}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          ref={inputRef}
        />
        <InputRightElement>
          <CloseIcon
            color={"#181818"}
            cursor={"pointer"}
            onClick={() => {
              setSearchInput("");
              onGameSearch("");
            }}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export default SearchInput