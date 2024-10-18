import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaAndroid,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";

import {
  MdOutlinePhoneIphone,
  MdPhoneAndroid,
  MdPhoneIphone,
} from "react-icons/md";
import {
  MdOutlinePhoneIphone,
  MdPhoneAndroid,
  MdPhoneIphone,
} from "react-icons/md";
import { Platform } from "../services/game-service";
import { SiNintendoswitch } from "react-icons/si";
import { IconType } from "react-icons";
import { SiNintendoswitch } from "react-icons/si";
import { IconType } from "react-icons";
// import { Platform } from "../service/game-service";
interface Props {
  platforms: Platform[];
}
// export const platformTypes = [
//   "PC",
//   "PlayStation ",
//   "Xbox",
//   "ios",
//   "Android",
//   "macOS",
//   "Linux",
//   "Nintendo Switch",
// ];
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  nintendo: SiNintendoswitch,
};
// export const platformTypes = [
//   "PC",
//   "PlayStation ",
//   "Xbox",
//   "ios",
//   "Android",
//   "macOS",
//   "Linux",
//   "Nintendo Switch",
// ];
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  nintendo: SiNintendoswitch,
};

function PlatformIcons({ platforms }: Props) {

  

  
  return (
    <HStack gap={1}>
      {platforms.map(({ platform }) => (
        <>
          <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.400'} />
          {/* <Text> {platform.slug}</Text> */}
        </>
      ))}
    </HStack>
  );
}

export default PlatformIcons;
