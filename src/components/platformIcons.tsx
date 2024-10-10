import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import {
  FaAndroid,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";

import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiNetflixFill } from "react-icons/ri";
import { Platform } from "../services/game-service";
// import { Platform } from "../service/game-service";
interface Props{
  platforms:Platform[]
}


function PlatformIcons( {platforms}:Props) {
  return (
    <HStack gap={1}>
      {platforms.map(({ platform }) => {
        if (platform.name === "PC")
          return <FaWindows width={"12px"} key={platform.name} />;
        if (platform.name === "PlayStation 3")
          return <FaPlaystation width={"12px"} key={platform.name} />;
        if (platform.name === "Xbox 360")
          return <FaXbox width={"12px"} key={platform.name} />;
        if (platform.name === "ios")
          return <MdOutlinePhoneIphone width={"12px"} key={platform.name} />;
        if (platform.name === "Android")
          return <FaAndroid width={"12px"} key={platform.name} />;
        if (platform.name === "macOS")
          return <FaApple width={"12px"} key={platform.name} />;
        if (platform.name === "Linux")
          return <FaLinux width={"12px"} key={platform.name} />;
        if (platform.name === "Nintendo Switch")
          return <RiNetflixFill width={"12px"} key={platform.name} />;
      })}
    </HStack>
  );
}

export default PlatformIcons;
